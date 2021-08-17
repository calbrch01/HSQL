IMPORT $.demods;
OUTPUT(demods.ds);
name1 := 'Mahdi';
name2 := 'Bahareh';
customers := demods.ds;
__r_action_0 := FUNCTION
__r_action_1 := TABLE(Customers,{ CustomerName,City });
RETURN __r_action_1;
END;
__r_action_0;
__r_action_2 := FUNCTION
__r_action_3 := TABLE(Customers,{ Customers });
RETURN __r_action_3;
END;
__r_action_2;
OUTPUT(demods.ds);