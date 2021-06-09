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
import { AST, ContexedTranslationError, ErrorSeverity, ErrorType, TaskManager } from 'hsqlt';

// TODO someday work with non-file:// functions
export function validator(
    document: FTDoc,
    changes: TextDocumentContentChangeEvent[],
    version: number,
    documents: TextDocuments<TextDocument>
) {
    const changesInc = changes.filter(eventChecks.eventIsIncremental);
    const allDocs = documents.all();

    const mainFile = fileURLToPath(document.uri);

    const disposable: [string, string][] = allDocs.map(e => [fileURLToPath(e.uri), e.getText()]);
    const fileMap = new Map(disposable);

    const tm = new TaskManager(mainFile, false, fileMap);
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

        // FIXME use a range
        entry.push({
            message: issue.msg,
            range: Range.create(startPosition, startPosition),
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
export function getFileList(asts: Map<string, AST>): string[] {
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
