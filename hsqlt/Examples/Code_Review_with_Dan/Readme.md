## Installation and setting up

To run this sample code you may want install the VSCode extension file.vsix [here](./Extension_LatestVersion/hsqlt-extension-0.0.14.vsix); it presents syntax highlighting and syntax checking.

To install the extension, you can:
1. Right click on the file.vsix (In VSCode Explorer) and at the buttom click on the `Install extension VSIX`.
2. Open the Command window (`Ctrl+Shift+P`) and search for 'Install from VSIX' (Leaving the quotes of course). Then, navigate to the file and select it.

The examples have already been translated for use, but translations can be made using the HSQL extension, by opening the Command window (`Ctrl+Shift+P`) and entering `Compile a HSQL Program`.


If you decide to use the command line tool (Located [here](./Extension_LatestVersion/), you can pick your preferred platform), and use them accordingly:

- Linux/Mac:
```sh
./hsqlt-linux
./hsqlt-linux
```

- Windows:
```cmd
.\hsqlt-win.exe
```

### CLI Tool usage

More information on the CLI tool usage can be found here under the (notes folder)[../notes/programui.md]

## `Import`

<img src="./GrammarRule_SVGs/importStmt.rrd.svg">

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
See the example code for [IMPORT Syntax](.\import.ecl)

|HSQL code|ECL result|
|---|---|
|<code>IMPORT %.demoDS;<br />OUTPUT demoDS.ds;</code>|<code>IMPORT $.demoDS;<br />OUTPUT(demoDS.ds);</code>|

Note:
1. HSQL will attempt to resolve HSQL files by default. This means errors are better reported in these cases. Here, HSQL will report on incorrect variable references, and on using the wrong variables (eg. Trying to Select from a module).
2. Better error reporting can be added for `.ecl` files, by including a `.dhsql` file alongside the same file.


## `Simple ECL Definition.`

<img src="./GrammarRule_SVGs/definitionStmt.rrd.svg">

See the example code for [ECL Definition Syntax](.\simpleECLDefinition.HSQL)

name1 = 'Mahdi';
output name1;

|HSQL code|ECL result|
|---|---|
|<code>name1 = 'Mr. Dan Camper';<br />output name1;;</code>|<code>name1 := 'Mr. Dan Camper';<br />OUTPUT(name1);</code>|


## What is demoDS?

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
## Select

<img src="./GrammarRule_SVGs/selectStmt.rrd.svg">

Syntax:
`SELECT [DISTINCT] <col [AS <alias>]>[,<col2 [AS <anotheralias>]> ,...] from <table_source> [,<another_table_source>, ...] [where <clause>] [GROUP BY <groupname>] [ORDER BY <col1> [ASC|DESC][,<col2> [ASC|DESC],...]] [LIMIT <rownum> [OFFSET <rownum>]];
`

Breaking this pretty huge statement down, there are a few key points to note:
1. `table_source`: A table source. It can be an existing table, an in-place select statement or a join. 
2. LIMIT/OFFSET: This is a MYSQL syntax variant that allows picking up only a segment of the actual table; It is identical to `CHOOSEN` in ECL. 

### Set 1 - Simple Selects 

See the example code for [ECL Definition Syntax](.\simpleSelects.HSQL)

#### SELECT Particular columns

|HSQL code|ECL result|
|---|---|
|<code>SELECT CustomerName, City FROM Customers;</code>|<code>__r_action_0 := FUNCTION<br />__r_action_1 := TABLE(Customers,{ CustomerName,City });<br />RETURN __r_action_1;<br />END;<br />__r_action_0;</code>|

#### Select ALL Columns

|HSQL code|ECL result|
|---|---|
|<code>SELECT * FROM Customers;</code>|<code>__r_action_2 := FUNCTION<br />__r_action_3 := TABLE(Customers,{ Customers });<br />RETURN __r_action_3;<br />END;<br />__r_action_2;</code>|

#### SELECT Order By

|HSQL code|ECL result|
|---|---|
|<code>SELECT * FROM Customers ORDER BY customerid DESC;</code>|<code>__r_action_4 := FUNCTION<br />__r_action_5 := SORT(Customers,-(customerid));<br />__r_action_6 := TABLE(__r_action_5,{ __r_action_5 });<br />RETURN __r_action_6;<br />END;<br />__r_action_4;</code>|

#### SELECT Where

|HSQL code|ECL result|
|---|---|
|<code>select * from Customers where customerid>2;</code>|<code>__r_action_4;<br />__r_action_7 := FUNCTION<br />__r_action_8 := Customers( customerid > 2);<br />__r_action_9 := TABLE(__r_action_8,{ __r_action_8 });<br />RETURN __r_action_9;<br />END;<br />__r_action_7;</code>|


<!-- // TODO add examples for SELECT DISTINCT -->
#### SELECT DISTINCT

|HSQL code|ECL result|
|---|---|
|<code>select distinct country from demods.ds;</code>|<code>__r_action_0 := FUNCTION<br />__r_action_1 := TABLE(demods.ds,{ country });<br />__r_action_2 := DEDUP(__r_action_1,ALL);<br />RETURN __r_action_2;<br />END;<br />__r_action_0;;</code>|


### `SELECT`'s Order of Operations


The ECL Code generation is split into these phases
1. FROM **(*)**
    a. Enumerate aliases - make definitions for all the aliases
    b. Enumerate joins and datasets - Make definitions for all the datasets and joins
    c. Join all into one table - Join the results into one table  
2. WHERE - Perform a filter on the above set
3. ORDER BY - Order by the given columns, using `SORT`
4. groupandColfit **(*)**- Filter out the columns, include aggregation functions and do the group by. This is done by ECL's `TABLE`.
5. LIMITOFFSET - Implemented using `CHOOSEN`
6. DISTINCT - Performs a global `DEDUP`
7. DISTRIBUTE - DISTRIBUTES by `HASH32`


The steps marked with **(*)**  are the mandatory part in `SELECT`. Other than the first one, the rest of them use the previous result's output and derives a new variable for use.
