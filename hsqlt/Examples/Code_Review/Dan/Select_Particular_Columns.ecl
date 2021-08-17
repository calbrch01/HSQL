IMPORT $.demods;
customers := demods.ds;
__r_action_0 := FUNCTION
__r_action_1 := TABLE(Customers,{ CustomerName,City });
RETURN __r_action_1;
END;
__r_action_0;