rec := {INTEGER customerid,STRING customername,STRING contactName,STRING address,STRING city,STRING postalcode,STRING country};
__r_action_1 := FUNCTION
__r_action_0 := DATASET('~hsql::W3SQL.csv',rec,CSV);
__r_action_2 := TABLE(__r_action_0,{ __r_action_0 });
__r_action_3 := CHOOSEN(__r_action_2,90,1);
RETURN __r_action_3;
END;
__r_action_1;