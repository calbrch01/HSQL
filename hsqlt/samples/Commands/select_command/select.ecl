// import
IMPORT $.marks;

// markslist = select marks from marks.marks distribute by marks;
__r_action_0 := FUNCTION
__r_action_1 := TABLE(marks.marks,{ marks });
__r_action_2 := DISTRIBUTE(__r_action_1,HASH32(marks));
RETURN __r_action_2;
END;
markslist := __r_action_0;

//output markslist title marksList;
OUTPUT(markslist,,NAMED('marksList'));


// counting = select subid,AVG(marks) as avgmarks from marks.marks group by subid order by subid ;
__r_action_3 := FUNCTION
__r_action_4 := SORT(marks.marks,subid);
__r_action_5 := TABLE(__r_action_4,{ subid,avgmarks := AVE(GROUP,marks) },subid);
RETURN __r_action_5;
END;
counting := __r_action_3;

//marksJoined = select * from counting join marks.subs on counting.subid=marks.subs.subid as somesource;

__r_action_6 := FUNCTION
somesource := JOIN(counting,marks.subs,LEFT.subid = RIGHT.subid);
__r_action_7 := TABLE(somesource,{ somesource });
RETURN __r_action_7;
END;
marksJoined := __r_action_6;

//marksSimplified = select subname, avgmarks from marksJoined;
__r_action_8 := FUNCTION
__r_action_9 := TABLE(marksJoined,{ subname,avgmarks });
RETURN __r_action_9;
END;
marksSimplified := __r_action_8;


//output marksSimplified title avgmarks;
OUTPUT(marksSimplified,,NAMED('avgmarks'));



//select COUNT(*) from marks.marks; //rowcount
__r_action_10 := FUNCTION
__r_action_11 := TABLE(marks.marks,{ __default_col_0 := COUNT(GROUP) });
RETURN __r_action_11;
END;
__r_action_10;      // output instead of passing it into a definition

// select COUNT(marks) as ab from marks.marks;
__r_action_12 := FUNCTION
__r_action_13 := TABLE(marks.marks,{ ab := COUNT(GROUP) });
RETURN __r_action_13;
END;
__r_action_12;      // output instead of passing it into a definition