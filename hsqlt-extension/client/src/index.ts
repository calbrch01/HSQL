// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import path = require('path');
import * as vscode from 'vscode';
import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
    TransportKind,
} from 'vscode-languageclient';
import { FileOutput, FileProvider, FSFileProvider, FSManager, TaskManager } from 'hsqlt';
import { relative } from 'path';
import { URL } from 'url';
let client: LanguageClient;

/**
 * Cache the locations (This reduces delay with fetching from eclcc)
//  */
class FSManagerSource {
    protected static instance: FileProvider[] | undefined;
    async getInstance(tm: TaskManager): Promise<FileProvider[]> {
        if (FSManagerSource.instance === undefined) {
            FSManagerSource.instance = await FSManager.DefaultsProvidersFactory(tm.errorManager);
        }
        return FSManagerSource.instance;
    }
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    const serverModule = context.asAbsolutePath(path.join('dist', 'server.js'));

    const serverOptions: ServerOptions = {
        run: { transport: TransportKind.ipc, module: serverModule },
        debug: {
            transport: TransportKind.ipc,
            module: serverModule,
            options: {
                execArgv: ['--nolazy', '--inspect=6009'],
            },
        },
    };
    const clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: 'file', language: 'hsql' }],
        synchronize: {
            fileEvents: vscode.workspace.createFileSystemWatcher('**/*.hsql'),
        },
    };

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    // console.log('Congratulations, your extension "hsqlt" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    context.subscriptions.push(
        vscode.commands.registerCommand('hsqlt.compile', async () => {
            await vscode.workspace.saveAll();
            const fn = vscode.window.activeTextEditor.document.fileName;
            const uri = vscode.window.activeTextEditor.document.uri;
            let folderName = vscode.workspace.getWorkspaceFolder(uri)?.uri?.fsPath;
            if (folderName === undefined) {
                // just the containing folder
                folderName = relative(fn, '..');
            }

            // const mainFile = relative(folderName, fn);
            // console.log(fn);
            const folderPath = relative('', folderName);
            const x = new TaskManager(
                relative(folderPath, fn) /* mainFile */,
                false,
                new FileOutput(folderPath),
                undefined,
                true
            );
            // await vscode.window.showInformationMessage('Start AST generating');
            // x.addFileProviders(new FSFileProvider());
            x.addFileProviders(
                ...(await new FSManagerSource().getInstance(x)),
                // offset it from the current directory
                new FSFileProvider(folderPath, undefined, true)
            );
            try {
                x.generateAST();
            } catch (e) {
                await vscode.window.showInformationMessage('Errors in AST generating');
            }

            const {
                counts: [errors, warnings],
            } = x.issueStats();
            // await vscode.window.showInformationMessage('Got statistics');

            // await vscode.window.showInformationMessage('Done AST generating');
            if (errors > 0) {
                await vscode.window.showErrorMessage('Errors in compiling');
            } else {
                if (warnings > 0) {
                    const ans = await vscode.window.showWarningMessage(
                        'Warnings in Compiling. Stop?',
                        'Yes',
                        'No'
                    );
                    console.log('Warnings', x.getIssues());
                    // TODO ?? allow configuration
                    if (ans !== 'Yes') {
                        await x.generateOutputs();
                        await vscode.window.showInformationMessage('Done writing');
                    }
                } else {
                    await x.generateOutputs();
                    await vscode.window.showInformationMessage('Done writing');
                }
            }
        })
    );
    client = new LanguageClient('HSQL', 'HSQL Client', serverOptions, clientOptions);

    client.start();
}

// this method is called when your extension is deactivated
export async function deactivate() {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
