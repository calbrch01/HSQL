/*
    Example code - use without restriction.  
*/
Layout_Person := RECORD
  UNSIGNED1 PersonID;
  STRING15  FirstName;
  STRING25  LastName;
END;

allPeople := DATASET([ {1,'Fred','Smith'},
                       {2,'Joe','Blow'},
                       {3,'Jane','Smith'}],Layout_Person);



// a = select sometable.c1 from (select * from t2 where c1>5) as sometable;
// 



somePeople := allPeople;
// output(somePeople, NAMED('before'));
//export
export strange3:= PARALLEL(OUTPUT(somePeople(PersonID>1)));



somePeople := 5;
//  Outputs  ---
// OUTPUT(somePeople,NAMED('after'));
// OUTPUT(strange3,NAMED('abc'));
