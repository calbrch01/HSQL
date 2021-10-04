# HPCC Systems Structured Query Language ( H-SQL )

## What is HSQL?

<b>H-SQL is the new big data query language of the HPCC systems ! </b>

It leverages a declarative SQL like syntax and translates to [Enterprise Control Language (`ECL`)](<https://en.wikipedia.org/wiki/ECL_(data-centric_programming_language)>). It can also work in conjunction with ECL to allow a team of data science developers to explore and analyze big data across a high performance computing cluster without the programmer being involved in many of the lower level, imperative decisions.

<b><i>It is designed mostly for SQL developers that are interested in developing on the HPCC systems platform.</i> </b>Using H-SQL, developers should easily adapt to the HPCC systems platform and start working with big-data right away.

## About this repository:

<!-- The Complete Source Code -->

This repository contains the latest and greatest implementation of HSQL language [`hsqlt`](hsqlt/) written in TypeScript, and its Visual Studio Code Extension [`hsqlt-extension`](hsqlt-extension/).

## Examples and Syntax:

#### Select all columns from table

```hsql
a = select * from tableName;
```


```hsql
b = select column1,column2, column4 as X from tableName;
```

#### Group by

```hsql
g = select * from tableName group by column1;
```

```hsql
g = select AVG(wages) from employees group by wages;
```

#### JOIN

```hsql
c = select * from table1,table2, table3 join table4 on table3.x = table4.y;
```
#### Plot 

```hsql
plot from xyz title myplot type bar;
plot from abc title myotherplot type column;
```

#### Output

```
a = 5;
OUTPUT a;                  // regular output
OUTPUT a TITLE my_Var;     // give the output a name
```

#### Functions


```
function isInCountry(layout rec x,string y) {
    z = select * from x where country=y order by customerid desc;
    return z;
};
```

#### Machine Learning

```hsql
ind = select PersonID,age from commonsimple.simpleTable where PersonID<5;
dep = select PersonID,wage from commonsimple.simpleTable where PersonID<5;

test = select PersonID,age from commonsimple.simpleTable where PersonID>4;

model = train from ind,dep method LinearRegression;

result = predict model from test;
```

Please refer to the <b> [HSQL Examples and Syntax](hsqlt/notes/syntax.md) </b> page to explore more examples.


## 🚀 Getting Started with HSQL:

 <b> [Installation and Getting Started](hsqlt/README.md) </b> 

 <b> [HSQL Language Syntax](hsqlt/notes/syntax.md) </b> 



