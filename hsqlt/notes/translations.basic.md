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
// group by and having(-> another table based filter) ??
sw := TABLE(ap, { personid,C:=COUNT(group)},personid);
sw;

// select count(personid),sum(personid) from ap;
sm := TABLE(ap,{c:=COUNT(GROUP),s:=sum(group,personid)} );
sm;

// TODO what is count(*) and count(somecolumn) ??

// select count(*) from ap;
// select count(personid) from ap;
// no difference between above ones for ECL

//select firstname as someothercol from ap;
sc := table(ap,{someothercol:= firstname});

//select *,firstname as somecol from ap;
//c :=  table(ap,Layout_person);
//c;
sg := TABLE(ap,{ap,x:=ap.personid});
sg;

// limit queries
// select * from ap limit 3;
sl := table(ap)[1..3];
sl;

// offset 
// select * from ap limit 3 offset 2
// need to do some calcs
// lower bound = 1 + offset
// upper bound = limit + offset
// limit 3 offset 2 = lb 3 ub 5
// limit 2 offset 2 = lb 3 ub 4
slt := table(ap)[3..4];
slt;


```