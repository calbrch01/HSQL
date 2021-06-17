# HSQL

## Dependencies

### Non-NPM dependencies:

-   Java(>8)

### NPM based:

Dependencies:

-   ts-node - TS Runtime wrapping for NodeJS
-   antlr4ts - ANTLR tool
-   @types/node - Types for Node.JS environment
-   yargs - provides optstring parsing for Node.JS application
-   string-template - Provides string templates for usage

devDependencies(Dependencies that are used during development):

-   typedoc - Generate project documentation from source comments
-   typescript - Runtime
-   nodemon - Reruns the project if source code is changed (Useful during development)
-   mocha - Testing framework
-   chai - Assertion library
-   antlr4ts-cli - Provides a CLI to work with the ANTLR tool
-   pkg - Compile to bytecode and package into executable


## Development + Notes

Please refer to [notes](notes/index.md)
### Debugging grammar

In VSCode, use the ANTLR extension.
Open the grammar file and press F5 (/the debug key shortcut/go to the debug menu)
This will use `input.hsql` and should show:

-   Parse/Lexing errors
-   The parse tree

### Running this project during development

1. Install the requirements
    ```bash
    npm install
    ```
2. Execution can be tested with
    - Run the typescript project directly
        ```bash
        ts-node src
        ```
    - Build to JS
        ```bash
        npx tsc
        node build
        ```
        _OR_
        ```bash
        npm run build
        node build
        ```
    - Compile to bytecode and package to executable (This uses the code built to JS)
        ```bash
        npm run pkg
        ```

### Testing

General tests are stored under `src/test`
Module-specific file are present side-by-side as `*.spec.ts`

### NPM scripts

NPM scripts are defined here to help you do some quick actions on this repository.

Usage: `npm run <script-name>`

| Script Name    | Explanation                                  | Default Output location |
| -------------- | -------------------------------------------- | ----------------------- |
| check          | Checks source code for errors                | -                       |
| check-circular | Checks source code for cyclic dependencies   | -                       |
| build          | Build the project into JS                    | `build/`                |
| build-dev      | Build the project & tests into JS            | `build/`                |
| test           | Runs all tests (TS)                          | -                       |
| regen          | Regenerate ANTLR grammar                     | `src/misc/grammar/`     |
| doc            | Generate TypeDoc documentation               | `docs/`                 |
| pkg            | Compile and package application              | `dist/`                 |
| cov            | Code Coverage                                | -                       |
| clean          | Remove build artifacts (`build`,`doc`,`pkg`) | -                       |

### Typedoc

Typedoc is a documentation generator and most types requiring explanation have been documented.
To generate the documentation:

```sh
npm run doc
```

This will place the documentation under `docs/`.
Note that the result will be a html project. The easiest way to view it, is to use a document server like `serve` that creates a local webserver for you to use:

```sh
npx serve docs/
```
### Madge

The JS emit is based on CommonJS, and care has to be taken to *not* include circular dependencies. Due to how includes are done at runtime in CommonJS modules, certain imports may not work correctly (Although it is deterministic and you can certainly get it to work if circular dependencies are required). Hence, the best way to deal with circular dependencies, is to not have them at all. 
```sh
npm run check-circular
```
This should give a good idea as to where circular dependencies are present.