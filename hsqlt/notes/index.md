## Basic syntaxes

### Starting with work

The current objective is to get code generation working.
After that, all assumptions made (can be tracked with `FIXME`) should be worked on.


### Todo list
- [ ] Typedef
- [X] Having syntax

### Goals

HSQL
- SQL 92 syntax support
- Function and Modular support
- Transparent Medley support
- VS Code support
- Full ML support

## [Program UI](./programui.md)

## [Scratchpad](./scratchpad.md)

## Current architecture

![Architecture](structure.drawio.png)
## Translation sets
### Select
> Use `+`,`JOIN(...,TRUE,ALL)`
1. Select all from existing table (copy)

    `t2 = select * from t1`

    `select * from t1`

2. Select few columns - vertical slice

    `t2 = select col1,col2 from t1`

3. **Aggregating** - Need ECL Equivalent

    `t2 = select sum(col1),count(col2) from t1`

4. Load from logical file

    `p1 = select * from '~scoped::file' layout l1`

    Mentioning fomat:
    - `p1 = select * from '~scoped::file' layout l1 format flat|csv|xml where y>5`

    `p1 := DATASET('~scoped::file',l1,csv(...))(y>5)`


## Extended Syntax
### Plot

`plot xyz type Bar title 'hello'`

### Output

`output xyz to file '~scoped::file' format csv overwrite`

`output xyz;`

`output xyz named 'someName';`



### Train


### Predict

### ML functions

```
import GLM;

model = train ...;

a = $GLM.BinomialConfusion(model)$;
```