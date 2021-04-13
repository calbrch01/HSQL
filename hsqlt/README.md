# HSQL


## Dependencies
### Non-NPM dependencies:
- Java(>8)

### NPM based:

Dependencies:
- ts-node - TS Runtime wrapping
- antlr4ts - ANTLR tool
- @types/node - Types for Node.JS environment

devDependencies(Dependencies that are used during development):
- serve - To serve files statically over the web (Useful for viewing typedoc results)
- typedoc - Generate project documentation from source comments
- typescript - Runtime
- nodemon - Reruns the project if source code is changed (Useful during development)
- mocha - Testing framework
- chai - Assertion library
- antlr4ts-cli - Provides a CLI to work with the ANTLR tool

## Why Typescript

- Type safe, and easier to understand code, as all types are present and explained.
- Can set translation target, so we can use newer language features without worrying about underlying JS.
- Have to redesign the visitor code to allow for AST Generation
- Do not need to track ANTLR tool

## Debugging grammar

In VSCode, use the ANTLR extension.
Open the grammar file and press F5 (/the debug key shortcut/go to the debug menu)
This will use `input.hsql` and should show:

-   Parse/Lexing errors
-   The parse tree


## Running this project during development

1. Install the requirements
```bash
npm install
```
2. Now, there's two ways around
```bash
ts-node src
```
*OR*
```bash
npx tsc
node build
```
### Additional NPM scripts

Usage: `npm run <script-name>`

|Script Name|Explanation|
|---|---|
|test|Runs all tests|
|dev|Runs nodemon to run the project in watch mode|
|doc|Generate TypeDoc documentation|
|build|Build the project into JS|
|regen|Regenerate ANTLR grammar|
