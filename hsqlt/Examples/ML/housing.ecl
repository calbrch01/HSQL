export housing := MODULE
EXPORT housinglayout := {INTEGER id,INTEGER date,REAL price,INTEGER bedrooms,REAL bathrooms,REAL sqft_living,REAL sqft_lot,REAL floors,INTEGER waterfront,INTEGER view,INTEGER condition,INTEGER grade,INTEGER sqft_above,INTEGER sqft_basement,INTEGER yr_built,INTEGER yr_renovated,INTEGER zipcode,REAL lat,REAL long,INTEGER sqft_living15,INTEGER sqft_lot15};
__r_action_0 := FUNCTION
__r_action_0 := DATASET('~ds::kc_house_data.csv',housinglayout,CSV);
__r_action_1 := TABLE(__r_action_0,{ __r_action_0 });
RETURN __r_action_1;
END;
EXPORT hdata := __r_action_0;
END;