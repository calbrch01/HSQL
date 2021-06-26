```
declare x as <table(...)|ANYTABLE>;

declare l as <layout(...)|ANYLAYOUT>;

declare LinearRegression as Trainable TRAIN '' USING? (...) MAKING '' WITH? (...) returning <TABLE(...)|ANYTABLE>;

declare Bar as PLOT  ON '';
```

## TRAIN

'{bundle}.get({x,y}{comma}{options})`

`bundle` -> current bundle address
`x` -> independent set
`y` -> dependent set
`comma` -> comma emitted if options length is greater than zero