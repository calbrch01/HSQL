import {
    Position,
    Range,
    TextDocuments,
    URI,
    Diagnostic,
    DiagnosticSeverity,
} from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { fileURLToPath, pathToFileURL } from 'url';
import {
    AST,
    ContexedTranslationError,
    ErrorSeverity,
    HaltError,
    TaskManager,
    FileType,
    FileProvider,
    FSFileProvider,
    MemFileProvider,
    FSManager,
} from 'hsqlt';
import { relative } from 'path';

/**
 * Cache the locations (This reduces delay with fetching from eclcc)
 */
class FSManagerSource {
    protected static instance: FileProvider[] | undefined;
    async getInstance(tm: TaskManager): Promise<FileProvider[]> {
        if (FSManagerSource.instance === undefined) {
            FSManagerSource.instance = await FSManager.DefaultsProvidersFactory(tm.errorManager);
        }
        return FSManagerSource.instance;
    }
}

// FUTURE someday work with non-file:// functions
export async function validator(document: TextDocument, documents: TextDocuments<TextDocument>) {
    // changes?: TextDocumentContentChangeEvent[],
    // version?: number,
    // const changesInc = changes.filter(eventChecks.eventIsIncremental);
    const allDocs = documents.all();

    const mainFile = fileURLToPath(document.uri);

    // generate a file map and map file extensions over accordingly
    let disposable = allDocs.reduce((t, e) => {
        const fileName = relative('', fileURLToPath(e.uri));
        const type = FSFileProvider.getFileType(fileName).type;
        if (type === FileType.HSQL || type === FileType.DHSQL) {
            t.push([fileName, { content: e.getText(), type }]);
        }
        return t;
    }, new Array<[string, { content: string; type: FileType.HSQL | FileType.DHSQL }]>());

    // const x = relative;
    const fileMap = new Map(disposable);

    const tm = new TaskManager(relative('', mainFile), false);
    tm.addFileProviders(
        ...(await new FSManagerSource().getInstance(tm)),
        new MemFileProvider(fileMap, true),
        new FSFileProvider()
    );
    try {
        const results = tm.generateAST();
    } catch (e) {
        if (e instanceof HaltError) {
            // console.debug('Threw a usual error');
        } else {
            console.debug('Threw an unusual error');
        }
    }
    // tm.ASTMap
    return {
        asts: tm.ASTMap,
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
    // console.debug('Issue Count', issues.length, issues);
    for (const issue of issues) {
        const fn = pathToFileURL(issue.ctx).toString();
        const entry = mappedIssues.get(fn) ?? [];

        const startPosition = Position.create((issue.line ?? 1) - 1, issue.charPositionInLine ?? 0);
        const endPosition = Position.create(
            (issue.lineEnd ?? issue.line ?? 1) - 1,
            issue.charPositionInLineEnd ?? issue.charPositionInLine ?? 0
        );
        console.log('issue', startPosition, endPosition);
        // FIXME use a range
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
