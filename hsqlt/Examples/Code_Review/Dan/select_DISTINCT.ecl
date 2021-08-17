IMPORT $.demods;
__r_action_0 := FUNCTION
__r_action_1 := TABLE(demods.ds,{ country });
__r_action_2 := DEDUP(__r_action_1,ALL);
RETURN __r_action_2;
END;
__r_action_0;