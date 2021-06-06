// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import path = require("path");
import * as vscode from "vscode";
import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
    TransportKind,
} from "vscode-languageclient";

let client: LanguageClient;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    const serverModule = context.asAbsolutePath(path.join("dist", "server.js"));

    const serverOptions: ServerOptions = {
        run: { transport: TransportKind.ipc, module: serverModule },
        debug: {
            transport: TransportKind.ipc,
            module: serverModule,
            options: {
                execArgv: ["--nolazy", "--inspect=6009"],
            },
        },
    };
    const clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: "file", language: "hsql" }],
        synchronize: {
            fileEvents: vscode.workspace.createFileSystemWatcher("**/*.hsql"),
        },
    };

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    // console.log('Congratulations, your extension "hsqlt" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    context.subscriptions.push(
        vscode.commands.registerCommand("hsqlt.helloWorld", async () => {
            await vscode.window.showErrorMessage(serverModule);
        })
    );
    client = new LanguageClient(
        "HSQL",
        "HSQL Client",
        serverOptions,
        clientOptions
    );

    client.start();
}

// this method is called when your extension is deactivated
export async function deactivate() {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
