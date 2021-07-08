IMPORT $.marks;
__r_action_0 := FUNCTION
__r_action_1 := TABLE(marks.marks,{ marks });
__r_action_2 := DISTRIBUTE(__r_action_1,HASH32(marks));
RETURN __r_action_2;
END;
markslist := __r_action_0;
OUTPUT(markslist,,NAMED('marksList'));
__r_action_3 := FUNCTION
__r_action_4 := SORT(marks.marks,subid);
__r_action_5 := TABLE(__r_action_4,{ subid,avgmarks := AVE(GROUP,marks) },subid);
RETURN __r_action_5;
END;
counting := __r_action_3;
__r_action_6 := FUNCTION
somesource := JOIN(counting,marks.subs,LEFT.subid = RIGHT.subid);
__r_action_7 := TABLE(somesource,{ somesource });
RETURN __r_action_7;
END;
marksJoined := __r_action_6;
OUTPUT(marksJoined,,NAMED('avgmarks'));