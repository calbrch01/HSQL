# HSQLC

HSQL enables developers that are already familiar with SQL to work seamlessly with HPCC.

Designed to work in conjunction with ECL, the primary programming language for HPCC, it should prove itself easy to work with and robust for general purpose analysis.


This repository contains `hsqlc`, which essentially transpiles HSQL into ECL.

The syntax of the language is very similar to SQL, to curb the learning curves, and adds easier syntax for things such as importing, exporting.


Refer to [docs](docs/README.md) for more installation, usage and more details.

## Useful Links

 - [Getting started](docs/README.md)
 - [HSQL Syntax](docs/syntax.md)
 - [HSQLC](docs/hsqlc/README.md)
 - [Example translation](docs/example-translation.md)

## Installing

Its super easy to set it up

1. Grab the module. 
    
    Hint: Clone the repository or download it as a zip.

2. Setup the repositry, with all the dependencies (Add sudo if required)
```sh
npm i -g
``` 
3. Test drive
```sh
hsqlc -i readme.hsql
```