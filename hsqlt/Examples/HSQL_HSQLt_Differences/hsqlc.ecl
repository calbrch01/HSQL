IMPORT source ;
export hsqlc:= MODULE
SHARED markslist := TABLE(source.marks,{marks});
SHARED _reservedaction0 := OUTPUT(markslist,,NAMED('marksList'));
SHARED counting := SORT(TABLE(source.marks,{subid,REAL marks := ave(GROUP,marks)},subid),subid);
SHARED marksJoined := TABLE(JOIN(counting,source.subs,LEFT.subid = RIGHT.subid,INNER));
SHARED _reservedaction1 := OUTPUT(marksJoined,,NAMED('avgmarks'));
EXPORT main := FUNCTION return PARALLEL(_reservedaction0,_reservedaction1); END;
END;