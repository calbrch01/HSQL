# CLI

## CLI command

```
hsqlc check|make|run -weopd <file>
```

## Args

|Mode |Desc|
|-----|----|
|check|Check for errors and warnings only|
|make |Write dependencies|
|run  |Submit to Systems|

|Argument|Short|Desc|
|--------|-----|----|
|--no-warn|-w|No warnings|
|--depcheck-skip|-e|Skip dependency type checks(Assume everything returned is a module)|
|--pedantic|-p|Pedantic (Abort on warnings)|
|--output-std|-o|Output primary requested files to stdout|
|--dont-write-deps|-d|Skip writing dependencies|
|--target|-t|Target for `run` eg. `hthor`|
|--cluster|-c|Cluster to submit to|


# ECL Cloud IDE

`Syntax Check` and `Submit`

# VSCode

- Autocomplete
  - Every time `.` is inserted
  - Pressing Ctl+` `
- Syntax error highlighting
  - Work with RAM objects