# HSQL Syntax

## Table of Contents

- [HSQL Syntax](#hsql-syntax)
  - [Table of Contents](#table-of-contents)
  - [Basics](#basics)
    - [Statements](#statements)
    - [Comments](#comments)
    - [Example](#example)
  - [Select](#select)
    - [Syntax](#syntax)
    - [Examples](#examples)
  - [Train](#train)
    - [Syntax](#syntax-1)
    - [Examples](#examples-1)
  - [Predict](#predict)
    - [Syntax](#syntax-2)
    - [Examples](#examples-2)
  - [Import](#import)
    - [Syntax](#syntax-3)
    - [ECL vs HSQL imports](#ecl-vs-hsql-imports)
    - [Examples](#examples-3)
  - [Plot Statement](#plot-statement)
    - [Syntax](#syntax-4)
    - [Currently supported PLOT types](#currently-supported-plot-types)
    - [Example](#example-1)
  - [Output statement](#output-statement)
    - [Syntax](#syntax-5)
    - [Examples](#examples-4)
  - [Embedded ECL Statements](#embedded-ecl-statements)
    - [Syntax](#syntax-6)
    - [Examples](#examples-5)
  - [Type Hinting](#type-hinting)
  - [Syntax](#syntax-7)
  - [Examples](#examples-6)

## Basics

### Statements

Statements in HSQL, can be definitions, or actions to take. They all end with a semicolon.
Definitions are in the general form of
```
<identifier> = <stmt>;
```
Actions are simply:
```
<action> [options];
```

Actions are executed in the **order that they are declared** in the program.

### Comments

HSQL supports the usual SQL-like comments which start with `--` statement.
Additionally, the standard C-like comments are also supported. ie. `//` 
Multi-line comments are done with `/* */`

```hsql
-- This is a SQL-like comment
// This is a C-styl comment
/* This is a multi-line comment.
   This spans a lot of lines.
*/
/* This is another multi-line comment
 * with a lot of words.
 * The * in between helps make the code look prettier
 */
```

### Example

[readme.hsql](../../readme.hsql) has been [translated for reference](example-translation.md).

## Select

### Syntax

```
<var> = SELECT <col1>[,<col2>,[aggregate(<col3>)]] FROM <table-src> [WHERE <condition>] [GROUP BY <column>] [ORDER BY <column>] ; 
```

Here table source (`table-src`) can be:
1. A table - 
   
   Syntax : `[module.]<tableName>`
2. A logical file
   
   Syntax : `'~logicalfile::scope::fileName' layout <layout> [type <typeName>]`
   typeName : `csv`|`json`|`thor`|`xml`
3. A nested query

   Syntax: [Select statement](#select)

The aggregates are:
1. Sum - sum of the column
2. Count - count of the table
3. Avg - average of the column

### Examples

#### Select all columns from table

```hsql
a = select * from tableName;
```

#### Simple select columns

```hsql
b = select column1,column2 from tableName;
```

#### Select with conditions

```hsql
c = select column3 from tableName where column3>0;
```

#### Select with functions and conditions

```hsql
d = select count(column5) from table-3 where column4=column5;
```

Note that using more than one aggregate may not yield correct results, especially using count()
This is due to the nature of the count function in ECL.
A workaround is to perform these individually before joining them.

#### Order by column 

```hsql
f = select * from tableName order by column1;
```

#### Group by column

```hsql
g = select * from tableName group by column1;
```

#### Select a dataset

```hsql
simpleLayout = create layout (PersonID integer,name string, age integer, wage integer, hasHouse integer);
simpleTable = select * from '~hsql::testfiles::simpledata.csv' layout simpleLayout;
```

## Train

### Syntax

```
<modelname> = train from <ind>,<dep>[,<test>] method <methodName> [option < <option1>=<val>,<option2>=<val2>,... >];
```

### Examples

```hsql
ind = select PersonID,age from commonsimple.simpleTable where PersonID<5;
dep = select PersonID,wage from commonsimple.simpleTable where PersonID<5;

test = select PersonID,age from commonsimple.simpleTable where PersonID>4;

model = train from ind,dep method LinearRegression;

```

## Predict

### Syntax 

```
<modelName> = predict <modelname> from <test> [method <methodName>];
```


Some models do not need a model (case in point - DBScan). The predict statement is used for these cases, made like this:

```
<modelName> = predict from <test> method <methodName> [option < <option1>=<val>,<option2>=<val2>,... > ];
```

### Examples

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

### ECL vs HSQL imports

#### ECL imports

HSQLC cannot parse `.ecl` files, and hence such imports will not have strict variable checks, ie. **the identifier will not be well defined**.
Eg. importing `foo` from `foo.ecl` will allow `foo.someTable` even if its not actually exported.

##### Definitions

To fix this issue of not being able have strict checks on imports.
A `.d.hsql` file can be present along with the ecl file, using the appropriate `map export` statements to instruct HSQL the types to appropriately enforce them.

#### HSQL files

HSQL modules are imported, and the imported identifier is well defined, and the types are checked stricty.

HSQL files that have been imported may also be translated and written to their corresponding files (using the `-d` flag, refer to [hsqlc's arguments](hsqlc/index.md)).

### Examples

```hsql
import foo as bar;
import baz;
```

All tables/layouts exported by `foo`, can be accessed as `bar.someTable` (Simply, `bar` becomes the name of the identifier). Similarly, the tables exported by `baz`, will be `baz.someTable`.

## Plot Statement 

The plot statement is used to display graphical representations of tables.

### Syntax

```
PLOT FROM <identifier> TITLE <title> [TYPE <plot-type>];
```

`<title>`: string containing name of the plot

The default plot type is : `Bar`

### Currently supported PLOT types

1. Bar graphs - `Bar`
2. Column graphs - `Column`
3. Pie charts - `Pie`

### Example

```hsql
plot xyz title 'myplot';//defaults to bar
plot abc title 'myotherplot' type column;
```

## Output statement

The output statement is an action that is designed to output the contents of whatever is selected.

### Syntax

```
OUTPUT <table|model> [[TITLE <'titlename'>]|[FILE '~logical::scoped::file' <fileType>]] [OVERWRITE|UDPATE] [EXPIRE <number_of_days>];
```


File Types can be:
1. CSV
2. JSON
3. THOR
4. XML

### Examples

#### Named

```hsql
OUTPUT sometable title 'myTitle';
```

#### Save to CSV

Note that the `overwrite` tag is optional

```hsql
OUTPUT sometable file '~hsql::output::out.csv' csv overwrite;
```

#### Expire tags

```hsql
OUTPUT sometable title 'goodtitle' expire 3;
```

## Embedded ECL Statements

These are statements which are officially not meant to be used, but provided if required.

### Syntax

```
__ecl '<quote escaped ecl>';
```

Note that since the second token is a string, and ecl can have strings, they must be escaped an additional time, ie. "\'" should be "\\'". Additionally, no trailing semicolon should be used.
Refer the source [embedecl.hsql](../tests/testScripts/eclembed.hsql) for a look at how it can be used effectively

### Examples

```hsql
__ecl 'shared a:= DATASET';
```

This statement can be made more effective by reflecting the changes back to hsql by hinting the types created using the [map statements](#type-hinting).

Refer to this example for how to use this together:

test [eclembed.hsql](../tests/testScripts/eclembed.hsql)

## Type Hinting

These statements don't have any translations, they only indicate (specifically, add) type information about tables and layouts for hsql to track.
These can be used in 2 ways:
1. .d.hsql files: Mention the exports here for hsql to pick up the export information for the corresponding ecl file
2. Along with embedded ecl statements: This can be used to reinsert all the definitions created in the ecl statement back to hsql. 

## Syntax

```
map [export] <identifier> <table|layout> (<identifier1> <datatype1>,<identifier2> <datatype2>,...);
```

## Examples

1. .d.hsql - `tests/samples` -> [input2.hsql](../tests/samples/input2.hsql) uses [dummy.ecl](../tests/samples/dummy.ecl) and [dummy.d.hsql](../tests/samples/dummy.d.hsql)
2. Inline ecl - test [eclembed.hsql](../tests/testScripts/eclembed.hsql)

