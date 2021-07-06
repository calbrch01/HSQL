# Syntax

## Table of Contents

- [Syntax](#syntax)
  - [Table of Contents](#table-of-contents)
  - [Styling of the syntax](#styling-of-the-syntax)
  - [Basics](#basics)
    - [Statements](#statements)
    - [Comments](#comments)
  - [Select](#select)
    - [Syntax](#syntax-1)
    - [Examples](#examples)
      - [Select all columns from table](#select-all-columns-from-table)
      - [Simple select columns](#simple-select-columns)
      - [Select with conditions](#select-with-conditions)
      - [Selecting from multiple tables](#selecting-from-multiple-tables)
      - [Select with functions and conditions](#select-with-functions-and-conditions)
      - [Order by column](#order-by-column)
      - [Group by column](#group-by-column)


## Styling of the syntax

`<xyz>` -> represents a required argument
`[xyz]` -> is optional
`...` -> a pattern which continues


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

Actions are executed in parallel, but for the sake of the compiler, they should be written such that no variables are referenced before their declaration.

### Comments

HSQL supports the usual SQL-like comments which start with `--` statement.
Additionally, the standard C-like comments are also supported. ie. `//` 
Multi-line comments are done with `/* */`

```
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

Columns can be used *and reordered* by using mentioning the columns to be used for the SELECT query. This is useful for filtering out unnecessary columns and setting 

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
g = select AVG(wages) from employees group by wages 
```