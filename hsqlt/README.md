# HSQL

## Getting started

### Using HSQL

HSQL is best used with VSCode, or the CLI tool if required. Here's some more details on the [CLI tool](./notes/programui.md).


### Running this project during development

1. Install the requirements
    ```sh
    npm install
    ```
2. Execution can be tested with
    - Run the typescript project directly
        ```sh
        ts-node src
        ```
    - Build to JS
        ```sh
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

#### NPM scripts

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

#### Testing

General tests are stored under `src/test`
Module-specific file are present side-by-side as `*.spec.ts`
Tests can be called with the `test` script.
#### Debugging grammar

The repository has preconfigured extension recommendations for usage.
Open the grammar file and press F5 (/the debug key shortcut/go to the debug menu)
This will use `input.hsql` and should show:

-   Parse/Lexing errors
-   The parse tree (Note that semantic actions/predicates are ignored here)
### Development + Notes

Please refer to [notes](notes/index.md)
