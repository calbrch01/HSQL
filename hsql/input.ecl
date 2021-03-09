IMPORT insurance ;
export input:= MODULE
SHARED insurancedata := TABLE(insurance.ds);
SHARED _reservedaction0 := OUTPUT(insurancedata);
EXPORT main := FUNCTION return PARALLEL(_reservedaction0); END;
END;