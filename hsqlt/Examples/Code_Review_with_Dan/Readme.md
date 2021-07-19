## What dempDS is?

It is a table about customer details, including contact name and addresses.

### Schema

|Column name| Column Type| Description|
|---|---|---|
|customerid | `integer` | Customer ID |
|customername | `string` | Customer Name|
|contactName | `string` | Contact Name for Customer |
|address | `string` | Address|
|city |  `string` | City of Residence|
|postalcode | `string` | Postal Code |
|country | `string` | Country of Residence |


## Installation and setting up

To run this sample code you may want install the VSCode extension present in the folder [here](); it presents syntax highlighting and syntax checking.

The examples have already been translated for use, but translations can be made using the HSQL extension.



If you decide to use the command line tool(Located [here]()), the setup can be checked here
```sh
hsqlt make <filename>
```

<!-- // TODO add link -->

## Import

### Syntax

Imports, is the simplest to use feature in this language. Its purpose is to import an existing module.

```
IMPORT <module> [AS <alias>];
```

Imports a `.hsql`/`.ecl` module for use.
Only values exported from the imported module are available for use. The `.` operator can be used to access the values exported by the module.

The '%' symbol can be used to refer to the current folder. Think of it as './' with respect to normal file paths.

Eg.
```
import %.mymodule; // from current directory -> use as 'mymodule'
import %.mymodule; // from same folder -> use as 'mymodule'
import %.mymodule as anothername; // from same folder -> use as 'anothername'

```

See the example code for [import syntax](.\import.ecl)



Note:
1. HSQL will attempt to resolve HSQL files by default. This means errors are better reported in these cases. Here, HSQL will report on incorrect variable references, and on using the wrong variables (eg. Trying to Select from a module).
2. Better error reporting can be added for `.ecl` files, by including a `.dhsql` file alongside the same file.

## Simple ECL Definition.



## Set 1 - Simple Selects 
### Select columns

### Select Order By
### Select Where
### Select DISTINCT

## Set 2 - Combining

### Select Group by and aggregation
### DISTINCT, WHERE




<br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br />
# List of all of the SQL commands from W3School website.

|SQL Command| HSQL Command | HSQLt |

|SQL Select|

|SQL Select Distinct|

|SQL Where |

|SQL And, Or, Not|

|SQL Order By|

|SQL Insert Intro|

|SQL Null Values|

|SQL Update|

|SQL Delete|

|SQL Select TOP|

|SQL Like|

|SQL Wildcards

|SQL In

|SQL Between

|SQL Aliases

|SQL Joins
|SQL Inner Joins
|SQL Left Join
|SQL Right Join

|SQL Full join

|SQL Self join

|SQL Group By

|SQL Having

|SQL Exists

|SQL Any, All

|SQL Select Into

|SQL Insert Into Select

|SQL Case

|SQL Null Functions

|SQL Stored Procedures

|SQL Comments

|SQL Operators

|*SQL Select from Multiple Tables||
