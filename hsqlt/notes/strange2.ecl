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

somePeople := allPeople(LastName = 'Smith');

//  Outputs  ---
somePeople;
someConstant := 5;

OUTPUT(someConstant,NAMED('lala'));

// this is invalid
//OUTPUT(someConstant,,NAMED('lala3'));

OUTPUT(somePeople,NAMED('lala2'));

OUTPUT(somePeople,,NAMED('lala3'));

OUTPUT(somePeople,,'~somewhere::i::belong.flat');

// this is an error 
OUTPUT(somePeople,NAMED('no'),'~somewhere::i::belong.flat');
//but this is correct
OUTPUT(somePeople,,NAMED('no'),'~somewhere::i::belong.flat');

//OUTPUT(someConstant,,'~somewhere::i::belong2.flat');