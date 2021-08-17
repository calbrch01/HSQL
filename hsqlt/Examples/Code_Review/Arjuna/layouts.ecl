rec := {INTEGER customerid,STRING customername,STRING contactname,STRING address,STRING city,STRING postalcode,STRING country};
__r_action_0 := FUNCTION
__r_action_0 := DATASET('~hsql::W3SQL.csv',rec,CSV);
__r_action_1 := TABLE(__r_action_0,{ __r_action_0 });
__r_action_2 := __r_action_1[1..];
RETURN __r_action_2;
END;
__r_action_0;