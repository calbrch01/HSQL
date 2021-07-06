# HSQL

## What is HSQL?

HSQL enables developers that are already familiar with SQL to work seamlessly with HPCC.

Designed to work in conjunction with ECL, the primary programming language for HPCC, it should prove itself easy to work with and robust for general purpose analysis.

Its important to remember that HSQL does not aim to emulate *SQL* to the point of being a drop in replacement, it provides a SQL like syntax while introducing developers to ECL concepts; being a helping hand while they are getting used to the ecosystem of HPCC Systems, or helping write quick and simple queries and make visualizations/Machine Learning models as required. A big point of difference is that it aims to remain very close to ECL, where ECL modules can be imported and used in HSQL, and vice versa.


## Getting started with HSQL

HSQL is but a language, and the main way of using it is to use a compiler for it.
Refer to [HSQLT](hsqlt/) for how to getting started with HSQL.


## Syntax

HSQL has a mostly SQL-like syntax, and the syntax is laid out in the [HSQLT Syntax page](hsqlt/notes/syntax.md).


## About this repository

This repository contains the older HSQL implementation (`hsql`) and its language server, followed by a newer implementation (`hsqlt`) in Typescript which is better organized and includes an intermediate representation stage.

## Folder structure of repo

HSQLT is the currently indev compiler which can translate HSQL into ECL. Its corresponding language server is also present, as a truly split client and server implementation.

| Folder | What it is |
| ------ | ---------- |
|[`hsql`](hsql/)|HSQLC (JS implementation)|
|[`hsql-extension`](hsql-server/)|HSQL Language Server implementation using HSQLC|
|[`hsqlt`](hsqlt/)|HSQLT (TS implementation)|
|[`hsqlt-extension`](hsqlt-extension/)|HSQL Language implementation using HSQLT|



## Old links

- [HSQLC docs](hsql/README.md)
- [HSQL Syntax](hsql/docs/syntax.md)
- [HSQL Extension README](hsql-server/README.md)