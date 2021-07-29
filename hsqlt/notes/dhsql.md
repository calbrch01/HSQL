```
declare x as <table(...)|ANYTABLE>;

declare l as <layout(...)|ANYLAYOUT>;



declare LinearRegression as TRAIN '' USING (minpts as int,) MAKING '' WITH? (...) returning <TABLE(...)|ANYTABLE> IMPORT qid*;

declare Bar as PLOT  ON '';
```

## TRAIN


What's needed?
0. Method name
1. A bundle name to import for this -> optional, else it is self.
2. A ML Choice -> Discrete or Numerical
3. Model making step
5. How to predict
6. What prediction results look like (or ANYTABLE)
7. 


'{bundle}.get({x,y}{comma}{options})`

`bundle` -> current bundle address
`x` -> independent set
`y` -> dependent set
`comma` -> comma emitted if options length is greater than zero