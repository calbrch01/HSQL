# HSQL

## Getting started

### Using HSQL

HSQL is best used with VSCode, or the CLI tool. Here's some more details on the [CLI tool](./notes/programui.md).


### Running this project during development

What's needed beforehand: `NodeJS`~v14,`Java`>v8.
(Hint: https://nodejs.org/ and https://www.java.com/ should be good sources to get them)

1. Install the project dependencies
    ```sh
    npm install
    ```
2. As this project is based on typescript, it can be run in various ways. (Tip: Use the first if it looks simpler)
    - Run the typescript project directly
        ```sh
        ts-node src/index.ts # This is the program
        ```
    - Build to JS
        ```bash
        npm run build # A tsc command that compiles the code into build/
        node build/index.js # Run the build js file
        ```
    - Compile to bytecode and package to executable (This uses the code built to JS)
        ```bash
        npm run pkg # A pkg command that compiles and packages your code into dist/
        ./dist/hsqlt-linux # pick your corresponding executable
        ```

TIP: index.js/index.ts is automatically inferred if the directory name is specified, so they may be ommitted.
i.e. `node build` is the same as `node build/index.js`

#### NPM scripts

NPM scripts are defined here to help you do some quick actions on this repository.
Its easier to remember the script name, rather than the whole command required to execute it.

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

#### Testing

General tests are stored under `src/test`
Module-specific file are present side-by-side as `*.spec.ts`
Tests can be called with the `test` script.
#### Debugging grammar

The repository has preconfigured extension recommendations for usage.
Open the grammar file and press F5 (/the debug key shortcut/go to the debug menu)
This will use `input.hsql` and should show:

-   Parse/Lexing errors
-   The parse tree (Note that semantic actions/predicates **are ignored here**)
### Development + Notes

Please refer to [notes](notes/index.md)
