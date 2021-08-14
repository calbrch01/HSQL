# Declarations


Declarations are a way of indicating what `.ecl` files contain. They are denoted by `.dhsql` files. They can be placed beside ecl files or folders to give some definitions for hsqlt to use.

## Typing declarations



```
declare x as <table(...)|ANYTABLE>;

declare l as <layout(...)|ANYLAYOUT>;

```
These indicate what particular values coming out of an ECL file can look like.



## Method Declarations


### Plot Declarations

#### Syntax
```
declare <plotType> as plot on '<stringTemplate>';
```

The String Template has the following points of replacement:
1. '{0}' - The output name

#### Example


```
declare Bubble as plot on 'TwoD.Bubble(\\'{0}\\',,\\'{0}\\')';
```


### ML Train-Predict Declarations

#### Train+Predict

##### Syntax

```


declare <methodName> as TRAIN 
  '<trainTemplate>' [INT|REAL]              // the train template ad whether discretization is required
  WHERE (<itemName> as <datatype>,...)      // the options
  RETURN TABLE(...)|ANYTABLE                // the type of the model
  WHERE '' RETURN TABLE(...)|ANYTABLE       // the predict template and the return tytpe of the predict template
  [by <importable>];                        // the actual bundle its in, which requires to be imported

```


The Train template has a few substitutions to consider:
1. bundleLoc - The location of the bundle (will be placed here)
2. ecldot - A delimiting '.' will be placed here if bundleLoc exists
3. trainOptions - Training options go in here, as named arguments
4. indep - X variable name
5. dep - Y variable name

The Predict template has a few substitutions to consider:
1. bundleLoc - The location of the bundle (will be placed here)
2. ecldot - A delimiting '.' will be placed here if bundleLoc exists
3. model - model name is placed here
4. indep - X variable name


##### Example
```
declare classificationforest as train 
                    '{bundleLoc}{ecldot}Classificationforest({trainOptions}).getModel({indep},{dep})' int WHERE (numtrees as int,featurespernode as int, maxdepth as int) RETURN ANYTABLE 
                    WHERE 
                    '{bundleLoc}{ecldot}classificationforest().predict({model},{indep})' RETURN TABLE(int wi,int id,int number,real value ) by learningtrees;
```

#### Predict only

Good for variables where a specific 'train+predict' doesn't exist. Eg. DBScan.
##### Syntax

```

declare <methodName> as predict 
  '<predicttemplate>'                       // the template
  WHERE (<itemName> as <datatype>,...)      // the options
  RETURN TABLE(...)|ANYTABLE                // the data type of the model/result generated
  [by <importable>];                        // the actual bundle its in, which requires to be imported

```


The Train template has a few substitutions to consider:
1. bundleLoc - The location of the bundle (will be placed here)
2. ecldot - A delimiting '.' will be placed here if bundleLoc exists
3. trainOptions - Training options go in here, as named arguments
4. indep - table name

##### Example
```
declare dbscan as predict '{bundleLoc}{ecldot}DBSCAN({trainOptions}).fit({indep})'
    WHERE (eps as real,minpts as int, ridge as real,dist as string)
    RETURN TABLE(int wi,int id,int number,int label) by DBScan;

```
