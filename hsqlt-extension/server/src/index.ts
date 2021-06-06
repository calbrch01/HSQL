#!/usr/bin/env node
import { createConnection, ProposedFeatures } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import { ErrorManager, ErrorMode, TaskManager } from "hsqlt";
const connection = createConnection(ProposedFeatures.all);

connection.onDidChangeWatchedFiles((change) => {
    // Monitored files have change in VS Code
    console.debug(change);
    const x = ErrorMode.NORMAL;
    connection.console.log("We received a file change event" + x);
});

connection.listen();
