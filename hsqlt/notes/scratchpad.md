# Scratchpad

## Big To-Do
- [ ] Resolving
- [ ] AST generation for the other nodes
## Errors
1. Parser - Generate incomplete tree and attempt to:
   1. Salvage identifier list
   2. Salvage imports
2. Semantic - Same as above.

## AST

- each AST is per file, done recursively?
## Actions

ECL: [`SEQUENTIAL`](https://hpccsystems.com/training/documentation/ecl-language-reference/html/SEQUENTIAL.html)

`PARALLEL` is default.


## Symbol Table

|Name|Type|Scope?|
|----|----|------|
|x|function<>|