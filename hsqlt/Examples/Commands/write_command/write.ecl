IMPORT $.a;
__r_action_0 := FUNCTION
__r_action_1 := SORT(a.t1,c1);
__r_action_2 := TABLE(__r_action_1,{ __r_action_1 });
RETURN __r_action_2;
END;
P := __r_action_0;
OUTPUT(p,,'~output::writetofile.csv',CSV);
OUTPUT(p,,'~output::writetofile.thor',THOR);
OUTPUT(p,,'~output::writetofile.xml',XML);