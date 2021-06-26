#!/usr/bin/env node
import {
    createConnection,
    ProposedFeatures,
    TextDocumentSyncKind,
    TextDocuments,
} from 'vscode-languageserver';
import { TDocs, FTDoc } from './TextDoc';
import { getFileList, mapIssues, validator } from './Translation';
import { TextDocument } from 'vscode-languageserver-textdocument';

const connection = createConnection(ProposedFeatures.all);

// text documents based on string based docs
const tdocs = new TDocs(FTDoc, [
    (d, c, v) => {
        // connection.console.log(`Incremental change on ${d.uri} ${JSON.stringify(c)}`);

        const needDiagnostics = true;
        if (needDiagnostics) {
            // need to generate file map
            validate(d).catch(e => connection.console.log('Something went really wrong'));
        }
    },
]);

// documents
const documents = new TextDocuments(tdocs);

// documents.onDidChangeContent((e) => {
//     // we will have to get diagnostics here, lets try
// });

documents.onDidOpen(async e => {
    await validate(e.document);
});

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

async function validate(d: TextDocument) {
    // console.log('tried getting answers');
    const { asts, issues } = await validator(d, documents);
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
