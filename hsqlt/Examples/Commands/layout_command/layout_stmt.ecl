export layout_stmt := MODULE
EXPORT rec := {INTEGER field1,INTEGER price,STRING brand,STRING model,INTEGER year,STRING title_status,REAL mileage,STRING color,STRING vin,STRING lot,STRING state,STRING country,STRING condition};
__r_action_1 := FUNCTION
__r_action_0 := DATASET('~hsql::usa_cars.thor',rec,THOR);
__r_action_2 := TABLE(__r_action_0,{ __r_action_0 });
RETURN __r_action_2;
END;
EXPORT ds := __r_action_1;
END;