# Syntax

## Table of Contents

-   [Syntax](#syntax)
    -   [Table of Contents](#table-of-contents)
    -   [Styling of the syntax](#styling-of-the-syntax)
    -   [Basics](#basics)
        -   [Statements](#statements)
        -   [Comments](#comments)
    -   [Select](#select)
        -   [Syntax](#syntax-1)
        -   [Examples](#examples)
            -   [Select all columns from table](#select-all-columns-from-table)
            -   [Simple select columns](#simple-select-columns)
            -   [Select with conditions](#select-with-conditions)
            -   [Selecting from multiple tables](#selecting-from-multiple-tables)
            -   [Select with functions and conditions](#select-with-functions-and-conditions)
            -   [Order by column](#order-by-column)
            -   [Group by column](#group-by-column)
    -   [Output](#output)
        -   [Syntax](#syntax-2)
        -   [Examples](#examples-1)
    -   [Write](#write)
        -   [Syntax](#syntax-3)
        -   [Examples](#examples-2)
    -   [Plot Statement](#plot-statement)
        -   [Syntax](#syntax-4)
        -   [Currently supported PLOT types](#currently-supported-plot-types)
        -   [Examples](#examples-3)
    -   [Layout](#layout)
        -   [Syntax](#syntax-5)
        -   [Examples](#examples-4)
    -   [Modules](#modules)
        -   [Syntax](#syntax-6)
        -   [Example](#example)
    -   [Functions](#functions)
        -   [Syntax](#syntax-7)
        -   [Examples](#examples-5)
    -   [Train](#train)
        -   [Syntax](#syntax-8)
        -   [Examples](#examples-6)
        -   [Supported Methods](#supported-methods)
    -   [Predict](#predict)
        -   [Syntax](#syntax-9)
        -   [Examples](#examples-7)
        -   [Supported Methods](#supported-methods-1)
            -   [With a model](#with-a-model)
            -   [Without a model](#without-a-model)
    -   [Import](#import)
        -   [Syntax](#syntax-10)
        -   [Examples](#examples-8)
        -   [ECL vs HSQL imports](#ecl-vs-hsql-imports)
            -   [ECL imports](#ecl-imports)
    -   [Type declarations](#type-declarations)

## Styling of the syntax

`<xyz>` -> represents a required argument
`[xyz]` -> is optional
`...` -> a pattern which continues

## Basics

### Statements

Statements in HSQL, can be definitions, or actions to take. They all end with a semicolon.
Definitions are in the general form of

```
[export] <identifier> = <stmt>;
```

Actions are simply:

```
<action> [options];
```

Actions are executed in parallel, but for the sake of the compiler, they should be written such that no variables are referenced before their declaration.
Note: If `export` is used, there can be no explicit actions in the program.

### Comments

HSQL supports the usual SQL-like comments which start with `--` statement.
Additionally, the standard C-like comments are also supported. ie. `//`
Multi-line comments are done with `/* */`

```
-- This is a SQL-like comment
// This is a C-style comment
/* This is a multi-line comment.
   This spans a lot of lines.
*/
/* This is another multi-line comment
 * with a lot of words.
 * The * in between helps make the code look prettier
 */
```

## Select

### Syntax

```
<var> = SELECT *|<col1>[,<col2>,[aggregate(<col3>)]] FROM <table-src>[,<table-src>[,...]] [WHERE <condition>] [GROUP BY <column>] [ORDER BY <column>] ;
```

Here, a table source (`table-src`) can be:

1. A table -

    Syntax : `[module.]<tableName>`

2. A nested query

    Syntax: [Select statement](#select)

3. The join of two tables

    Syntax: `[module.]<lhstableName> join [module.]<rhstableName> on [module.]<lhstableName> <comparisonOperator> [module.]<rhstableName>`

The aggregates are:

1. Sum - sum of the column
2. Count - RowCount of the table.
    1. NOTE: IN ECL There is no NULL value, so `COUNT(*)` and `COUNT(x)` have the same meaning and will return the same value.
3. Avg - average of the column
4. Min - Minimum value of a column
5. Max - Maximum value of a column
6. TRIM - Trim the ends of a string-based column

### Examples

#### Select all columns from table

```hsql
a = select * from tableName;
```

#### Simple select columns

Columns can be used _and reordered_ by using mentioning the columns to be used for the SELECT query. This is useful for filtering out unnecessary columns and setting

```hsql
b = select column1,column2, column4 as X from tableName;
```

#### Select with conditions

```hsql
c = select column3 from tableName where column3>0;
```

#### Selecting from multiple tables

An important thing to note that

```hsql
c = select * from table1,table2, table3 join table4 on table3.x = table4.y;
```

#### Select with functions and conditions

```hsql
d = select count(column5) from table-3 where column4=column5;
```

Note that using more than one aggregate may not yield correct results, especially using count()
This is due to the nature of the count function in ECL.
A workaround is to perform these individually before joining them.

#### Order by column

The Order by Clause can be used to sort elements.
Note that multiple columns may be used and in such a case it will be done in that order.

```hsql
f = select * from tableName order by column1;
```

```hsql
f = select * from tableName order by column1 ASC,column2 DESC;
```

#### Group by column

`Group by` groups table values according to the column provided, but its most useful when combined with an aggregation function.

```hsql
g = select * from tableName group by column1;
```

```hsql
g = select AVG(wages) from employees group by wages;
```

## Output

The output statement can be used to write a table or variable into the workunit. This will be visible on the workunit section `Outputs` and also on the Standard output if using the client tools.

### Syntax

```
OUTPUT <identifier> [TITLE <title>] [OVERWRITE];
```

### Examples

```
a = 5;
OUTPUT a;                  // regular output
OUTPUT a TITLE my_Var;     // give the output a name
```

## Write

The write statement can be used to write a **table** into as a logical file into the cluster.

### Syntax

```
WRITE <identifier> [TO FILE] [TYPE] [CSV|THOR|XML|JSON] <file location> [OVERWRITE];
```

The default file type being used is `THOR`

### Examples

```
WRITE someTable TO FILE TYPE CSV '~output::myfile.csv';     // write and make a csv file
WRITE someTable '~output::myfile.thor';     // write and make a thor file (using defaults)
WRITE someTable '~output::myfile.csv' OVERWRITE;     // write and overwrite if exists
```

## Plot Statement

The plot statement is used to display graphical representations of tables.

### Syntax

```
PLOT [FROM] <identifier> [TITLE] <titlename> [TYPE <plot-type>];
```

`<title>`: Name of the plot
`<identifer>`: Identifier for a table

### Currently supported PLOT types

1. `Bubble`
2. `Pie`
3. `Wordcloud`
4. `Area`
5. `Bar`
6. `Column`
7. `Line`
8. `Scatter`
9. `Step`

### Examples

```hsql
plot from xyz title myplot type bar;
plot from abc title myotherplot type column;
```

## Layout

Layout allows to create a layout structure for functions and for loading up datasets as tables.

### Syntax

```
table_name = layout (
  <datatype1> <column1>,
  <datatype2> <column2>,
  ...
);
```

### Examples

```
x = layout(
  int c1,
  int c2
);    // two columns, c1 and c2
```

## Modules

Modules are good to wrap definitions in, to give a better structure to code.

### Syntax

```
x = module{
  [export] <id1>= <stmt>;
  [export] <id2>= <stmt>;

};
```

### Example

```
z = module {
    export k = 5;
    export ab = 6;
    shared ac = 6;
};

-- export z;
output z.k;
output z.ab;
```

## Functions

Functions are a great way for enabling code reuse.

### Syntax

```
function <functionName>(<arguments>){
  [definitions]
  return <identifier>;
};
```

Note that like ECL, HSQL functions need a mandatory return type.

Arguments are a comma delimited list of either

1. Layouts-based tables -> Eg. `layout myrecord x`
2. Primitive values -> Eg. `float`/`int`

### Examples

```
function isInCountry(layout rec x,string y) {
    z = select * from x where country=y order by customerid desc;
    return z;
};
```

## Train

### Syntax

```
<modelname> = train from <ind>,<dep>[,<test>] method <methodName> [option < <option1> AS <val>,<option2> AS <val2>,... >] [ADD ORDER];
```

The `ADD ORDER` term inserts a Sequential ID to the datasets if required.

### Examples

```hsql
ind = select PersonID,age from commonsimple.simpleTable where PersonID<5;
dep = select PersonID,wage from commonsimple.simpleTable where PersonID<5;

test = select PersonID,age from commonsimple.simpleTable where PersonID>4;

model = train from ind,dep method LinearRegression;

```

### Supported Methods

1. `linearregression`
2. `classificationforest`
3. `regressionforest`
4. `glm` -> alias for `gaussianglm`
5. `gaussianglm`
6. `poissonglm`
7. `gammaglm`
8. `binomialglm`
9. `kmeans`

## Predict

### Syntax

```
<modelName> = predict <modelname> from <test> [method <methodName>] [ADD ORDER];
```

Some models do not need a model (case in point - DBScan). The predict statement is used for these cases, made like this:

```
<modelName> = predict from <test> method <methodName> [option < <option1> AS <val>,<option2> AS <val2>,... > ] [ADD ORDER];
```

### Examples

### Supported Methods

Refer to Train methods, and the model-less variant is for DBScan

#### With a model

```hsql
ind = select PersonID,age from commonsimple.simpleTable where PersonID<5;
dep = select PersonID,wage from commonsimple.simpleTable where PersonID<5;

test = select PersonID,age from commonsimple.simpleTable where PersonID>4;

model = train from ind,dep method LinearRegression;

result = predict model from test;
```

#### Without a model

```hsql
ind = select PersonID,age from commonsimple.simpleTable where PersonID<5;

output ind;

result = predict from ind method DBScan option minPts=2,eps=0.1;
```

## Import

Imports, being the simplest to use feature in this language, surprisingly a lot of background work.

### Syntax

```
IMPORT <module> [AS <alias>];
```

Imports a `.hsql`/`.ecl` module for use.
Only values exported from the imported module are available for use. The `.` operator can be used to access the values exported by the module.

### Examples

```
import foo; // import a module foo in the CWD
import %.foo; // import a module foo in the current folder
import foo as bar; // alias
import foo.bar; Import the bar module inside foo.
```

### ECL vs HSQL imports

#### ECL imports

HSQLC cannot parse `.ecl` files, and hence such imports will not have strict variable checks, ie. **the identifier will not be well defined** (Represented internally by an `ANY` type).
Eg. importing `foo` from `foo.ecl` will allow `foo.someTable` even if its not actually exported.

This can be taken care of by attaching a `.dhsql` file for definitions alongside the `.ecl` file.

## Type declarations

ECL files are considered as a ANY type, without strict typing, but that can be added in as well. Refer to [dhsql.md](dhsql.md) for more information.

Type declarations can also be used to extend the provided visualization and machine learning methods.
