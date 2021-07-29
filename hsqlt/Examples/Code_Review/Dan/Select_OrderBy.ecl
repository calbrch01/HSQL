IMPORT $.demods;
customers := demods.ds;
__r_action_0 := FUNCTION
__r_action_1 := SORT(Customers,-(customerid));
__r_action_2 := TABLE(__r_action_1,{ __r_action_1 });
RETURN __r_action_2;
END;
__r_action_0;