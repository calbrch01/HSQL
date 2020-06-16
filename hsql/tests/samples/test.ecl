OUTPUT(DATASET([{1}],{integer a}),,'~thor::base::filepath::20200607::filename',thor,expire(1),named('outputName'),ORDERED(true));
b:= DATASET([{1}],{integer a});
OUTPUT(b,,NAMED('hi'),UPDATE,EXPIRE(3));
OUTPUT(b,,'~thor::test.csv',CSV,OVERWRITE);

OUTPUT(b,,'~thor::test.json',JSON,EXPIRE(3),OVERWRITE);
OUTPUT(b,,OVERWRITE);