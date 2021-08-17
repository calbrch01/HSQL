IMPORT $.demods;
customers := demods.ds;
__r_action_0 := FUNCTION
__r_action_1 := Customers( customerid > 2);
__r_action_2 := TABLE(__r_action_1,{ __r_action_1 });
RETURN __r_action_2;
END;
__r_action_0;