/*
    Example code - use without restriction.  
*/
Layout_Person := RECORD
  UNSIGNED1 PersonID;
  STRING15  FirstName;
  STRING25  LastName;
END;

allPeople := NOFOLD(DATASET([ {1,'Fred','Smith'},
                       {2,'Joe','Blow'},
                       {3,'Jane','Smith'},
                     {3,'Jane','Smith'}],Layout_Person));

x:= allpeople;///TABLE(allPeople,{personid});
DEDUP(x,all);
TABLE(x,{x},personid,lastname,firstname,MERGE);

//  Outputs  ---
//somePeople;
