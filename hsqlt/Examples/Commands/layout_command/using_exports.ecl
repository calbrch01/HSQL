IMPORT $.layout_stmt;
ds := layout_stmt.ds;
rec := layout_stmt.ds;
__r_action_0 := FUNCTION
__r_action_1 := TABLE(ds,{ cnum := COUNT(GROUP),avgprice := AVE(GROUP,price),brand },brand);
RETURN __r_action_1;
END;
z := __r_action_0;
OUTPUT(z);