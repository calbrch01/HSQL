/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import { workspace, ExtensionContext,commands, window } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient';
import * as hsqlc from 'hsqlc';
import { promises as fsp } from 'fs';
import {EOL} from 'os';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	// The server is implemented in node
	let serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);
	// The debug options for the server
	// --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
	let debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	let serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
			options: debugOptions
		}
	};

	// Options to control the language client
	let clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		documentSelector: [{ scheme: 'file', language: 'hsql' }],
		synchronize: {
			// Notify the server about file changes to '.clientrc files contained in the workspace
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
		}
	};

	//register a command to compile
	const command = 'hsql.compile';
	const commandhandler = async (name:string)=>{
		await workspace.saveAll();
		const fn = window.activeTextEditor.document.fileName;
		const outfn = path.join(path.dirname(fn), path.basename(fn, path.extname(fn)) + '.ecl');
		// console.log('Saving');

		const results = await hsqlc.fileToECL(path.parse(window.activeTextEditor.document.fileName),[],{d:true,w:false});
		if(results.hasErrors()){
			window.showErrorMessage('HSQL translation error');
			return;
		}else if(results.hasWarnings()){
			window.showWarningMessage('HSQL translation finished with warnings');
		}
		try{
			await fsp.writeFile(outfn,results.translated.join(';'+EOL));
			window.showInformationMessage('Translation finished.');
		}catch(e){
			window.showWarningMessage('Error writing ECL file');
		}
		
	};
	context.subscriptions.push(commands.registerCommand(command, commandhandler));

	// Create the language client and start the client.
	client = new LanguageClient(
		'hsqllanguageserver',
		'HSQL Language Server',
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
	client.start();
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
