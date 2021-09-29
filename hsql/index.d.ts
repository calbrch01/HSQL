// Type definitions for hsqlc 0.7
// Project: HSQL

/*~ This is the module template file. You should rename it to index.d.ts
 *~ and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

import { ParsedPath } from "path";

export interface IdentifierNode {
  name: string;
  type: string;
  children?: Array<IdentifierNode>;
}

export interface IdentifierStoreResult {
  found: boolean;
  canGetTypes: boolean;
  result?: IdentifierNode;
}

export interface IdentifierStore {
  globalIdentifierStore: Array<IdentifierNode>;
  search(name: string): IdentifierStoreResult;
  searchIdentifier(name: string, typeName: string): IdentifierStoreResult;
}

export interface translationResults {
  translated: string[];
  identifierInformation?: IdentifierStore;
  hasErrors(): boolean;
  hasWarnings(): boolean;
  getIssues(): string[];
  getIssuesNumber(): number;
  getWarningsList(): translationResultsIssue[];
  getErrorsList(): translationResultsIssue[];
}

export interface translationResultsIssue {
  line: number;
  column: number;
  msg: string;
}
export interface parseOptions {
  //write dependencies
  d: boolean;
  //skip warnings
  w: boolean;
}
export function toECL(
  inputFilePath: ParsedPath,
  outputFilePath?: ParsedPath,
  importStack?: string[],
  options?: parseOptions
): void;
export function fileToECL(
  inputFilePath: ParsedPath,
  importStack?: string[],
  options?: parseOptions
): Promise<translationResults>;
export function stringToECL(
  data: string,
  pathInfo?: ParsedPath,
  importStack?: string[],
  options?: parseOptions
): Promise<translationResults>;
