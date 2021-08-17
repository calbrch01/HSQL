#!/usr/bin/env node
import {
    createConnection,
    ProposedFeatures,
    TextDocumentSyncKind,
    TextDocuments,
    TextDocumentChangeEvent,
    Diagnostic,
    CompletionItem,
    URI,
} from 'vscode-languageserver';
import { TDocs, FTDoc } from './TextDoc';
import { getFileList, mapIssues, resolveTypeResolver, validator } from './Translation';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { VariableTable } from 'hsqlt';
import { EDataType } from 'hsqlt';

const connection = createConnection(ProposedFeatures.all);

// text documents based on string based docs
const tdocs = new TDocs(FTDoc).addUpdateListener((d, c, v) => {
    // const needDiagnostics = true;
    // if (needDiagnostics) {
    // need to generate file map
    validate(d).catch(e => connection.console.log('Something went really wrong'));
    // }
});

// documents
const documents = new TextDocuments(tdocs);

async function val(e: TextDocumentChangeEvent<TextDocument>) {
    await validate(e.document);
}
documents.onDidOpen(val);
documents.onDidSave(val);

//clear the diagnostic if the file doesn't exist anymore
documents.onDidClose(async e => {
    // connection.sendDiagnostics();
    if (existsSync(fileURLToPath(e.document.uri))) {
        return;
    } else {
        connection.sendDiagnostics({ uri: e.document.uri, diagnostics: new Array<Diagnostic>() });
    }
});

let varTable: [URI, VariableTable | undefined] | undefined;
async function validate(d: TextDocument) {
    // console.log('tried getting answers');
    const { asts, issues, varTable: variableTable } = await validator(d, documents);
    if (variableTable !== undefined) {
        varTable = [d.uri, variableTable];
    } else if (varTable?.[0] !== d.uri) {
        varTable = [d.uri, undefined];
    } else {
        varTable = undefined;
    }
    // connection.console.log(`I>Got diagnostics :${issues.length} issues`);
    const fileList = getFileList(asts);

    const mappedIssues = mapIssues(issues, fileList);
    // connection.console.log(`I>Mapped the diagnostics filewise ${mappedIssues.size}`);
    // send these over
    // FIXME merge the asts uri map with this one
    const issuesList = [...mappedIssues];
    issuesList.forEach(([uri, diagnostics]) => {
        connection.sendDiagnostics({ uri, diagnostics });
    });
}
EDataType;
connection.onCompletion((params, token) => {
    // return new Array<CompletionItem>();
    // console.log(varTable);
    const vt = varTable?.[1]?.vars[0];
    if (vt === undefined) {
        return [];
    }
    const entries = [...vt];
    if (token.isCancellationRequested) {
        //dont bother doing the expensive work
        return;
    }
    const submittables = entries.map<CompletionItem>(([name, dataType]) => {
        return {
            label: name,
            kind: resolveTypeResolver[dataType.data.type],
        } as CompletionItem;
    });
    return submittables;
});

// connection.onCompletionResolve((params, tokens) => {});

connection.onInitialize(params => {
    const workspaceDirs = params.workspaceFolders;
    return {
        capabilities: {
            textDocumentSync: {
                openClose: true,
                change: TextDocumentSyncKind.Incremental,
                willSave: true,
            },
            completionProvider: {
                // resolveProvider: true,
                // triggerCharacters: ['.'],
            },
        },
    };
});

//Document manager should tune into the connection
documents.listen(connection);
// and finally, listen for some input
connection.listen();
