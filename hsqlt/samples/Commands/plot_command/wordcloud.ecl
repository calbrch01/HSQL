IMPORT Visualizer;
IMPORT $.marks;
__r_action_0 := FUNCTION
__r_action_1 := SORT(marks.marks,subid);
__r_action_2 := TABLE(__r_action_1,{ subid,avgmarks := AVE(GROUP,marks) },subid);
RETURN __r_action_2;
END;
counting := __r_action_0;
__r_action_3 := FUNCTION
somesource := JOIN(counting,marks.subs,LEFT.subid = RIGHT.subid);
__r_action_4 := TABLE(somesource,{ subname,avgmarks });
RETURN __r_action_4;
END;
marksJoined := __r_action_3;
PARALLEL(OUTPUT(marksJoined,,NAMED('mybarplot')),Visualizer.TwoD.wordcloud('mybarplot',,'mybarplot'));