/**
 * This set of functions is made from the official languageServer implementation
 * _after_ adding in documentation for my sanity
 */
import { TextDocumentContentChangeEvent } from 'vscode-languageserver-protocol';
import { Range } from 'vscode-languageserver-textdocument';
import { TextEdit } from 'vscode-languageserver-types';
import { CharCode } from './CharCode';

export namespace TextDocComputations {
    /**
     * Compute the line offsets for a string
     * @param text The text
     * @param isAtLineStart Whether to add the first line (textOffset??0) or not
     * @param textOffset Offset the output of this program
     * @returns A list of numbers where new lines start
     */
    export function computeLineOffsets(
        text: string,
        isAtLineStart: boolean,
        textOffset = 0
    ): number[] {
        const result: number[] = isAtLineStart ? [textOffset] : [];
        for (let i = 0; i < text.length; i++) {
            let ch = text.charCodeAt(i);
            if (ch === CharCode.CarriageReturn || ch === CharCode.LineFeed) {
                if (
                    ch === CharCode.CarriageReturn &&
                    i + 1 < text.length &&
                    text.charCodeAt(i + 1) === CharCode.LineFeed
                ) {
                    i++;
                }
                result.push(textOffset + i + 1);
            }
        }
        return result;
    }

    /**
     * Format the Range
     * @param range
     * @returns
     */
    export function getWellformedRange(range: Range): Range {
        const start = range.start;
        const end = range.end;
        if (
            start.line > end.line ||
            (start.line === end.line && start.character > end.character)
        ) {
            return { start: end, end: start };
        }
        return range;
    }

    /**
     * Fix some
     * @param textEdit A text edit
     * @returns A well f
     */
    export function getWellformedEdit(textEdit: TextEdit): TextEdit {
        const range = getWellformedRange(textEdit.range);
        if (range !== textEdit.range) {
            return { newText: textEdit.newText, range };
        }
        return textEdit;
    }
}
/**
 * The titular algorithm
 * @param data Data
 * @param compare Comparison function
 * @returns
 */
export function mergeSort<T>(data: T[], compare: (a: T, b: T) => number): T[] {
    if (data.length <= 1) {
        // sorted
        return data;
    }
    const p = (data.length / 2) | 0;
    const left = data.slice(0, p);
    const right = data.slice(p);

    mergeSort(left, compare);
    mergeSort(right, compare);

    let leftIdx = 0;
    let rightIdx = 0;
    let i = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
        let ret = compare(left[leftIdx], right[rightIdx]);
        if (ret <= 0) {
            // smaller_equal -> take left to preserve order
            data[i++] = left[leftIdx++];
        } else {
            // greater -> take right
            data[i++] = right[rightIdx++];
        }
    }
    while (leftIdx < left.length) {
        data[i++] = left[leftIdx++];
    }
    while (rightIdx < right.length) {
        data[i++] = right[rightIdx++];
    }
    return data;
}

/**
 * Event checks
 */
export namespace eventChecks {
    /**
     * Check if events being sent are incremental
     * @param event Event
     * @returns
     */
    export function eventIsIncremental(
        event: TextDocumentContentChangeEvent
    ): event is { range: Range; rangeLength?: number; text: string } {
        const candidate: { range: Range; rangeLength?: number; text: string } =
            event as any;
        return (
            candidate !== undefined &&
            candidate !== null &&
            typeof candidate.text === 'string' &&
            candidate.range !== undefined &&
            (candidate.rangeLength === undefined ||
                typeof candidate.rangeLength === 'number')
        );
    }

    /**
     * Check if events sent are full text
     * @param event Event
     * @returns
     */
    export function eventIsFull(
        event: TextDocumentContentChangeEvent
    ): event is { text: string } {
        let candidate: { range?: Range; rangeLength?: number; text: string } =
            event as any;
        return (
            candidate !== undefined &&
            candidate !== null &&
            typeof candidate.text === 'string' &&
            candidate.range === undefined &&
            candidate.rangeLength === undefined
        );
    }
}
