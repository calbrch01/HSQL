# Scratchpad

## Big To-Do
- [ ] Resolving
- [X] AST generation for the other nodes


## Error Management
1. Parser - Generate incomplete tree and attempt to:
   1. Salvage identifier list
   2. Salvage imports
2. Semantic - Same as above.

## AST

- each AST is per file, done recursively.
## Actions

ECL: [`SEQUENTIAL`](https://hpccsystems.com/training/documentation/ecl-language-reference/html/SEQUENTIAL.html)

`PARALLEL` is default.


## Symbol Table

| Name | Type   |
| ---- | ------ |
| x    | What<> |

Scope is done by pushing a scope onto the stack and popping it off later. Scope is later preserved in the AST Nodes. (Not the best idea, but it makes makes minimal modifications to the existing code)