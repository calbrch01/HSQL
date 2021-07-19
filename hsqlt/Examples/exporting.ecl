export exporting := MODULE
IMPORT $.a;
__r_action_0 := FUNCTION
__r_action_1 := SORT(a.t1,c1);
__r_action_2 := TABLE(__r_action_1,{ __r_action_1 });
RETURN __r_action_2;
END;
EXPORT P := __r_action_0;
__r_action_3 := FUNCTION
__r_action_4 := SORT(a.t1,-(c1));
__r_action_5 := TABLE(__r_action_4,{ __r_action_4 });
RETURN __r_action_5;
END;
SHARED Q := __r_action_3;
END;