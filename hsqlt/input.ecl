IMPORT bc ;
export input:= MODULE
SHARED d := TABLE(JOIN(bc,cd,LEFT.xy = RIGHT.yz,INNER));
END;