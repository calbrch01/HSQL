/**
 * @module
 * Tweaked reimplementation of TextDocument and TextDocuments from vscode-languageserver-textdocument
 */

import { TextDocuments } from 'vscode-languageserver';
import { TextDocumentContentChangeEvent, TextEdit } from 'vscode-languageserver-protocol';
import { DocumentUri, Position, Range, TextDocument } from 'vscode-languageserver-textdocument';
import { eventChecks, mergeSort, TextDocComputations } from './TextUtils';

/**
 * An extension of the TextDocument where updates are also required to be implemented
 */
export interface TextDocumentUpdatable extends TextDocument {
    update(changes: TextDocumentContentChangeEvent[], version: number): void;
}

/**
 * A singular document similar to Full Text Document from the language server;
 * But documented.
 */
export class FTDoc implements TextDocumentUpdatable {
    /**
     * A set of line offsets
     */
    protected _lineOffsets: number[] | undefined;
    constructor(
        private _uri: DocumentUri,
        private _languageId: string,
        private _version: number,
        protected _content: string
    ) {
        this._lineOffsets = undefined;
    }

    public get uri(): DocumentUri {
        return this._uri;
    }
    public get version(): number {
        return this._version;
    }
    public get languageId(): string {
        return this._languageId;
    }

    /**
     * Get the positions at which the lines start in the string.
     * This could be computed at the beginning,
     * but its not always necessary so we lazily compute it.
     */
    protected get lineOffsets(): number[] {
        if (this._lineOffsets === undefined) {
            this._lineOffsets = TextDocComputations.computeLineOffsets(this._content, true);
        }
        return this._lineOffsets;
    }

    /**
     * Get the index of the ~line offset at a given position
     * @param position
     * @returns
     */
    public offsetAt(position: Position) {
        let lineOffsets = this.lineOffsets;
        if (position.line >= lineOffsets.length) {
            return this._content.length;
        } else if (position.line < 0) {
            return 0;
        }
        let lineOffset = lineOffsets[position.line];
        let nextLineOffset =
            position.line + 1 < lineOffsets.length
                ? lineOffsets[position.line + 1]
                : this._content.length;
        return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
    }

    /**
     * Get text (or a segment of it)
     * @param range Optional Range
     * @returns Text segment
     */
    public getText(range?: Range): string {
        if (range) {
            const start = this.offsetAt(range.start);
            const end = this.offsetAt(range.end);
            return this._content.substring(start, end);
        }
        return this._content;
    }

    /**
     * Linecount
     */
    public get lineCount() {
        // this is just the line offset size -> as each element is for one line
        return this.lineOffsets.length;
    }

    /**
     * Given an offset (i for content[i]) , get back a Position
     * @param offset
     * @returns
     */
    public positionAt(offset: number): Position {
        offset = Math.max(Math.min(offset, this._content.length), 0);

        let lineOffsets = this.lineOffsets;
        let low = 0,
            high = lineOffsets.length;
        if (high === 0) {
            return { line: 0, character: offset };
        }
        while (low < high) {
            let mid = Math.floor((low + high) / 2);
            if (lineOffsets[mid] > offset) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        // low is the least x for which the line offset is larger than the current offset
        // or array.length if no line offset is larger than the current offset
        let line = low - 1;
        return { line, character: offset - lineOffsets[line] };
    }

    /**
     * Apply a list of changes to the document
     * @param changes
     * @param version
     */
    public update(changes: TextDocumentContentChangeEvent[], version: number): void {
        for (let change of changes) {
            if (eventChecks.eventIsIncremental(change)) {
                // makes sure start is before end
                const range = TextDocComputations.getWellformedRange(change.range);

                // update content
                const startOffset = this.offsetAt(range.start);
                const endOffset = this.offsetAt(range.end);
                this._content =
                    this._content.substring(0, startOffset) +
                    change.text +
                    this._content.substring(endOffset, this._content.length);

                // update the offsets
                const startLine = Math.max(range.start.line, 0);
                const endLine = Math.max(range.end.line, 0);
                let lineOffsets = this._lineOffsets!;
                const addedLineOffsets = TextDocComputations.computeLineOffsets(
                    change.text,
                    false,
                    startOffset
                );
                if (endLine - startLine === addedLineOffsets.length) {
                    for (let i = 0, len = addedLineOffsets.length; i < len; i++) {
                        lineOffsets[i + startLine + 1] = addedLineOffsets[i];
                    }
                } else {
                    if (addedLineOffsets.length < 10000) {
                        lineOffsets.splice(startLine + 1, endLine - startLine, ...addedLineOffsets);
                    } else {
                        // avoid too many arguments for splice
                        this._lineOffsets = lineOffsets = lineOffsets
                            .slice(0, startLine + 1)
                            .concat(addedLineOffsets, lineOffsets.slice(endLine + 1));
                    }
                }
                const diff = change.text.length - (endOffset - startOffset);
                if (diff !== 0) {
                    for (
                        let i = startLine + 1 + addedLineOffsets.length, len = lineOffsets.length;
                        i < len;
                        i++
                    ) {
                        lineOffsets[i] = lineOffsets[i] + diff;
                    }
                }
            } else if (eventChecks.eventIsFull(change)) {
                this._content = change.text;
                this._lineOffsets = undefined;
            } else {
                throw new Error('Unknown change event received');
            }
        }
        // update the version :P
        this._version = version;
    }
}

type ShapedClassConstructor<T> = new (
    _uri: DocumentUri,
    _languageId: string,
    _version: number,
    _content: string
) => T;

/**
 * Document listener
 */
export type DocListener<T> = (
    doc: T,
    changes: TextDocumentContentChangeEvent[],
    version: number
) => void;
// Why not a interface so that classes can be designed to use this?

/**
 * TextDocuments
 * use as new FTDocs(FullTextDocument/FTDoc)
 */
export class TDocs<T extends TextDocumentUpdatable> {
    /**
     *
     * @param cc A specific shaped class constructor
     * @param _listeners Listeners that can respond
     */
    constructor(
        protected cc: ShapedClassConstructor<T>,
        protected _listeners: DocListener<T>[] = []
    ) {
        // super();
    }
    create(uri: DocumentUri, languageId: string, ver: number, content: string): TextDocument {
        return new this.cc(uri, languageId, ver, content);
    }

    releaseListeners() {
        this._listeners.length = 0;
    }

    addUpdateListener(listener: DocListener<T>) {
        this._listeners.push(listener);
        return this;
    }

    update(document: T, changes: TextDocumentContentChangeEvent[], version: number): TextDocument {
        if (document instanceof this.cc) {
            document.update(changes, version);
            // run the listeners
            this._listeners.forEach(e => e(document, changes, version));
            return document;
        } else {
            throw new Error('Invalid object passed in, expected same as init');
        }
    }

    /**
     * Apply edits to a textdoc
     * @param document Document
     * @param edits List of edits
     * @returns
     */
    applyEdits(document: TextDocument, edits: TextEdit[]): string {
        let text = document.getText();
        let sortedEdits = mergeSort(edits.map(TextDocComputations.getWellformedEdit), (a, b) => {
            let diff = a.range.start.line - b.range.start.line;
            if (diff === 0) {
                return a.range.start.character - b.range.start.character;
            }
            return diff;
        });
        let lastModifiedOffset = 0;
        const spans = [];

        for (const e of sortedEdits) {
            let startOffset = document.offsetAt(e.range.start);
            if (startOffset < lastModifiedOffset) {
                throw new Error('Overlapping edit');
            } else if (startOffset > lastModifiedOffset) {
                spans.push(text.substring(lastModifiedOffset, startOffset));
            }
            if (e.newText.length) {
                spans.push(e.newText);
            }
            lastModifiedOffset = document.offsetAt(e.range.end);
        }
        spans.push(text.substr(lastModifiedOffset));
        return spans.join('');
    }
}
