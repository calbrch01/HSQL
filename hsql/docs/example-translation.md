# Example translations

## Input - readme.hsql

```hsql

IMPORT weather_h;
IMPORT games_h;

exp1 = select COUNT(*) from games_h.games_ds where price < 5;
exp2 = select name,price from games_h.games_ds where price < 5 order by price;
exp3 = select name, sum(price) from games_h.games_ds group by name;
exp4 = select * from games_h.games_ds where price < 2;

output exp3;
output exp2;
output exp3;
output exp4;

plot from exp2 title 'exp2' type Bar;
ind = select id,day,month from weather_h.attributes_ds where id < 600;
dep = select id,precipIntensity from weather_h.attributes_ds where id < 600;
test_ind = select id,day,month from weather_h.attributes_ds where id >= 600;

model1 = train from ind, dep method RegressionForest;
model1_predict = predict model1 from test_ind method RegressionForest;

output model1_predict;

```

## Output - readme.ecl

```ecl
IMPORT ML_Core ;
IMPORT ML_Core.Types  AS Types;
IMPORT Visualizer ;
IMPORT weather_h ;
IMPORT games_h ;
IMPORT LearningTrees ;
export readme := MODULE
SHARED exp1 := COUNT(TABLE(games_h.games_ds(price < 5)));
SHARED exp2 := SORT(TABLE(games_h.games_ds(price < 5),{name,price}),price);
SHARED exp3 := TABLE(games_h.games_ds,{name,REAL price := sum(GROUP,price)},name);
SHARED exp4 := TABLE(games_h.games_ds(price < 2));
SHARED _reservedaction0 := OUTPUT(exp3);
SHARED _reservedaction1 := OUTPUT(exp2);
SHARED _reservedaction2 := OUTPUT(exp3);
SHARED _reservedaction3 := OUTPUT(exp4);
SHARED _reservedaction4:= OUTPUT(exp2,NAMED('exp2'));
SHARED _reservedaction5 := Visualizer.MultiD.Bar('exp2');
SHARED ind := TABLE(weather_h.attributes_ds(id < 600),{id,day,month});
SHARED dep := TABLE(weather_h.attributes_ds(id < 600),{id,precipIntensity});
SHARED test_ind := TABLE(weather_h.attributes_ds(id >= 600),{id,day,month});
ML_Core.ToField(ind,_reserved_ind0);
SHARED _reserved_ind1 := _reserved_ind0;
ML_Core.ToField(dep,_reserved_dep0);
SHARED _reserved_dep1 := _reserved_dep0;
SHARED _reserved_ind10 := PROJECT(_reserved_ind1,TRANSFORM(RECORDOF(LEFT),SELF.id:=COUNTER,SELF:=LEFT));
SHARED _reserved_dep10 := PROJECT(_reserved_dep1,TRANSFORM(RECORDOF(LEFT),SELF.id:=COUNTER,SELF:=LEFT));
SHARED model1 := LearningTrees.RegressionForest().getModel(_reserved_ind10,_reserved_dep10);
ML_Core.ToField(test_ind,_reserved_test_ind0);
SHARED _reserved_test_ind1 := _reserved_test_ind0;
SHARED _reserved_test_ind00 := PROJECT(_reserved_test_ind1,TRANSFORM(RECORDOF(LEFT),SELF.id:=COUNTER,SELF:=LEFT));
SHARED model1_predict := LearningTrees.RegressionForest().Predict(model1,_reserved_test_ind00);
SHARED _reservedaction6 := OUTPUT(model1_predict);
EXPORT main := FUNCTION return SEQUENTIAL(_reservedaction0,_reservedaction1,_reservedaction2,_reservedaction3,_reservedaction4,_reservedaction5,_reservedaction6); END;
END;
```