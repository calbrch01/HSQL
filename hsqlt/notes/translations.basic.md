```ecl
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
                      {3,'Jane','Smith'},{1,'hello','world'}],Layout_Person);

somePeople := allPeople(LastName = 'Smith');

aP := allpeople;

// select count(*) from ap;
ss:= TABLE(ap,{ C:=COUNT(group)});
// ss:= count(ap)
ss;

// 

// select personid, count(personid) group by personid;

sw := TABLE(ap, { personid,C:=COUNT(group)},personid);
sw;

// select count(personid),sum(personid) from ap;
sm := TABLE(ap,{c:=COUNT(GROUP),s:=sum(group,personid)} );
sm;

// TODO what is count(*) and count(somecolumn) ??

// select count(*) from ap;

// select count(personid) from ap;

//select firstname as someothercol from ap;
sc := table(ap,{someothercol:= firstname});

//select *,firstname as somecol from ap;
//c :=  table(ap,Layout_person);
//c;
//sw := TABLE(ap, { personid,C:=COUNT(group)},personid);



// initial search - there seems to be no way to indicate


// group by and having(-> another table based filter) ??
sg := TABLE(ap);
sg;

```