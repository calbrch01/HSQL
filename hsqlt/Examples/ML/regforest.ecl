IMPORT ML_Core;
IMPORT ML_Core.Types;
IMPORT learningtrees as __r_action_0;
IMPORT $.housing;
hl := housing.housinglayout;
hldata := housing.hdata;
__r_action_1 := FUNCTION
__r_action_2 := TABLE(hldata,{ __default_col_0 := COUNT(GROUP) });
RETURN __r_action_2;
END;
counts := __r_action_1;
OUTPUT(counts,NAMED('dssize'));
__r_action_3 := FUNCTION
__r_action_4 := TABLE(hldata,{ bedrooms,bathrooms,sqft_living,sqft_lot,floors,waterfront,view,condition,grade,sqft_above,sqft_basement,yr_built,yr_renovated,zipcode,lat,long,sqft_living15,sqft_lot15 });
RETURN __r_action_4;
END;
x := __r_action_3;
__r_action_5 := FUNCTION
__r_action_6 := TABLE(hldata,{ price });
RETURN __r_action_6;
END;
y := __r_action_5;
__r_action_7 := FUNCTION
__r_action_8 := TABLE(x,{ x });
__r_action_9 := CHOOSEN(__r_action_8,20000);
RETURN __r_action_9;
END;
indt := __r_action_7;
__r_action_10 := FUNCTION
__r_action_11 := TABLE(y,{ y });
__r_action_12 := CHOOSEN(__r_action_11,20000);
RETURN __r_action_12;
END;
dept := __r_action_10;
ML_Core.AppendId(indt,__count,__r_action_14);
ML_Core.AppendId(dept,__count,__r_action_13);
ML_core.toField(__r_action_13,__r_action_15);
ML_core.toField(__r_action_14,__r_action_16);
model := __r_action_0.regressionforest(numtrees := 9).getModel(__r_action_16,__r_action_15);
__r_action_17 := FUNCTION
__r_action_18 := TABLE(x,{ x });
__r_action_19 := CHOOSEN(__r_action_18,1,20050);
RETURN __r_action_19;
END;
indp := __r_action_17;
__r_action_20 := FUNCTION
__r_action_21 := TABLE(y,{ y });
__r_action_22 := CHOOSEN(__r_action_21,1,20050);
RETURN __r_action_22;
END;
depp := __r_action_20;
ML_Core.AppendId(indp,__count,__r_action_23);
ML_core.toField(__r_action_23,__r_action_24);
deppd := __r_action_0.regressionforest().predict(model,__r_action_24);
OUTPUT(indp,NAMED('indp'));
OUTPUT(depp,NAMED('real_val'));
OUTPUT(deppd,NAMED('predicted_val'));