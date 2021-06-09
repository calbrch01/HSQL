#!/usr/bin/env node
import {
    createConnection,
    ProposedFeatures,
    TextDocumentPositionParams,
    CompletionItem,
    CompletionItemKind,
    TextDocumentSyncKind,
    TextDocuments,
    Diagnostic,
} from 'vscode-languageserver';
import { TDocs, FTDoc } from './TextDoc';
import { ErrorManager, ErrorMode, TaskManager } from 'hsqlt';
import { eventChecks } from './TextUtils';

import { fileURLToPath } from 'url';
import { getFileList, mapIssues, validator } from './Translation';

const connection = createConnection(ProposedFeatures.all);

// text documents based on string based docs
const tdocs = new TDocs(FTDoc, [
    (d, c, v) => {
        // connection.console.log(`Incremental change on ${d.uri} ${JSON.stringify(c)}`);

        const needDiagnostics = true;
        if (needDiagnostics) {
            // need to generate file map
            console.log(fileURLToPath(d.uri));
            const { asts, issues } = validator(d, c, v, documents);
            connection.console.log(`I>Got diagnostics :${issues.length} issues`);

            const fileList = getFileList(asts);

            const mappedIssues = mapIssues(issues, fileList);
            connection.console.log(`I>Mapped the diagnostics filewise ${mappedIssues.size}`);
            // send these over
            // FIXME merge the asts uri map with this one
            const issuesList = [...mappedIssues];
            issuesList.forEach(([uri, diagnostics]) => {
                connection.sendDiagnostics({ uri, diagnostics });
            });
        }
    },
]);
//
const documents = new TextDocuments(tdocs);

// documents.onDidChangeContent((e) => {
//     // we will have to get diagnostics here, lets try
// });

// documents.onDidOpen(e => {
//     connection.console.log(`Opened ${e.document.uri} - ${e.document.languageId}`);
// });

// documents.onDidClose(e => {
//     connection.console.log(`Closed ${e.document.uri} - ${e.document.languageId}`);
// });

connection.onInitialize(params => {
    const workspaceDirs = params.workspaceFolders;
    return {
        capabilities: {
            textDocumentSync: {
                openClose: true,
                change: TextDocumentSyncKind.Incremental,
                willSave: true,
            },
        },
    };
});

//Document manager should tune into the connection
documents.listen(connection);
// and finally, listen for some input
connection.listen();
