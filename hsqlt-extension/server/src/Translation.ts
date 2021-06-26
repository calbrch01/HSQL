import {
    Position,
    Range,
    TextDocuments,
    URI,
    Diagnostic,
    DiagnosticSeverity,
} from 'vscode-languageserver';
import { TextDocument, TextDocumentContentChangeEvent } from 'vscode-languageserver-textdocument';
import { DocListener, FTDoc } from './TextDoc';
import { eventChecks } from './TextUtils';
import { fileURLToPath, pathToFileURL } from 'url';
import { AST, ContexedTranslationError, ErrorSeverity, TaskManager } from 'hsqlt';
import { FileType } from '../../../hsqlt/build/misc/file/FileType';
import { MemFileProvider } from '../../../hsqlt/build/misc/file/FileProvider';
import { relative, resolve } from 'path';

// FUTURE someday work with non-file:// functions
export function validator(document: TextDocument, documents: TextDocuments<TextDocument>) {
    // changes?: TextDocumentContentChangeEvent[],
    // version?: number,
    // const changesInc = changes.filter(eventChecks.eventIsIncremental);
    const allDocs = documents.all();

    const mainFile = fileURLToPath(document.uri);

    const disposable = allDocs.map(
        e =>
            [
                relative('', fileURLToPath(e.uri)),
                { content: e.getText(), type: FileType.HSQL },
            ] as const
    );
    // const x = relative;
    const fileMap = new Map(disposable);

    const tm = new TaskManager(relative('', mainFile), false);
    tm.addFileProviders(new MemFileProvider(fileMap, true));
    const results = tm.generateAST();
    return {
        ...results,
        issues: tm.errorManager.issues,
    };
}

/**
 * Map HSQLT errors to LSP diagnostics
 * @param issues
 * @returns
 */
export function mapIssues(
    issues: ContexedTranslationError[],
    fileList: string[]
): Map<URI, Diagnostic[]> {
    const fileListMapped: [string, Diagnostic[]][] = fileList.map(e => [e, []]);
    const mappedIssues = new Map<URI, Diagnostic[]>(fileListMapped);
    for (const issue of issues) {
        const fn = pathToFileURL(issue.ctx).toString();
        const entry = mappedIssues.get(fn) ?? [];

        const startPosition = Position.create((issue.line ?? 1) - 1, issue.charPositionInLine ?? 0);
        const endPosition = Position.create(
            (issue.lineEnd ?? issue.line ?? 1) - 1,
            issue.charPositionInLineEnd ?? issue.charPositionInLine ?? 0
        );
        // FIXME use a range
        console.log(issue.line, issue.lineEnd);
        entry.push({
            message: issue.msg,
            range: Range.create(startPosition, endPosition),
            severity: mapDiagnosticType(issue.severity),
        });
        mappedIssues.set(fn, entry);
    }

    return mappedIssues;
}

/**
 * Get the list of files the ASTs are generated for
 * @param asts List of ASTs
 * @returns
 */
export function getFileList(
    asts: Map<
        string,
        {
            fileType: FileType.DHSQL | FileType.HSQL;
            ast: AST;
        }
    >
): string[] {
    const fileNameList: string[] = [];
    for (const [fileName] of asts.entries()) {
        fileNameList.push(pathToFileURL(fileName).toString());
    }
    return fileNameList;
}

export function mapDiagnosticType(x: ErrorSeverity): DiagnosticSeverity {
    switch (x) {
        case ErrorSeverity.ERROR: {
            return DiagnosticSeverity.Error;
        }
        case ErrorSeverity.WARNING: {
            return DiagnosticSeverity.Warning;
        }
        default: {
            return DiagnosticSeverity.Information;
        }
    }
}
