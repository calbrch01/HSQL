rec := {INTEGER customerid,STRING customername,STRING contactname,STRING address,STRING city,STRING postalcode,STRING country};
__r_action_0 := FUNCTION
__r_action_0 := DATASET('~hsql::W3SQL.csv',rec,CSV);
__r_action_1 := TABLE(__r_action_0,{ __r_action_0 });
__r_action_2 := CHOOSEN(__r_action_1,85,1);
RETURN __r_action_2;
END;
ds := __r_action_0;
isInCountry(DATASET(rec) x,STRING y) := FUNCTION;
__r_action_3 := FUNCTION
__r_action_4 := x( country = y);
__r_action_5 := SORT(__r_action_4,-(customerid));
__r_action_6 := TABLE(__r_action_5,{ __r_action_5 });
RETURN __r_action_6;
END;
z := __r_action_3;
RETURN z;
END;
inMexico := isInCountry(ds,'Mexico');
inSpain := isInCountry(ds,'Spain');
OUTPUT(inmexico,NAMED('inmexico'));
OUTPUT(inspain,NAMED('inspain'));