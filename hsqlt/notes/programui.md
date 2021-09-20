# CLI

## CLI command

```
hsqlt check|make|run -weopd <file>
```

## Args

| Mode  | Desc                                                    |
| ----- | ------------------------------------------------------- |
| check | Check for errors and warnings only                      |
| make  | Write dependencies                                      |
| run   | Submit to Cluster (Calls ECL Client tools on main file) |

| Argument          | Short  | Desc                                                                          |
| ----------------- | ------ | ----------------------------------------------------------------------------- |
| --no-warn         | -w     | No warnings                                                                   |
| --depcheck-skip   | -e     | Skip dependency type checks(Assume everything returned is a module)           |
| --pedantic        | -p     | Pedantic (Abort on warnings)                                                  |
| --output-std      | -o     | Output primary requested files to stdout                                      |
| --dont-write-deps | -d     | Skip writing dependencies                                                     |
| --target          | -t     | Target for `run` eg. `hthor`                                                  |
| ~~--cluster~~     | ~~-c~~ | ~~Cluster IP to submit~~ Set ECL Client tools environment variables instead   |
| ~~--port~~        | ~~-r~~ | ~~Cluster PORT to submit~~ Set ECL Client tools environment variables instead |

## Examples

1. Syntax check a hsql file

    `hsqlt check input.hsql`

2. Get output of a hsql file onto stdout

    `hsqlt make input.hsql -o`

3. Make output of a hsql file

    `hsqlt make input.hsql`

<!-- # ECL Cloud IDE

`Syntax Check` and `Submit` -->

# VSCode

-   Autocomplete
    -   Every time `.` is inserted
    -   Pressing Ctl+` `
-   Syntax error highlighting
    <!-- - Work with RAM objects -->
