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


x;

// variant 1 - old
DEDUP(x,all);
// variant 2 - new expr
TABLE(x,{x},personid,firstname,lastname,MERGE);

// a functionmacro which codifies the entry of the table elements as in variant 2
__dedupParser(la):= functionmacro
    #EXPORTXML(layoutelements,la);
    #declare(a)
    #set(a,'')
    #for(layoutelements)
        #for(field)
            #append(a,',');
            #append(a,%'{@label}'%);
            #end
        return %'a'%;
    #end
endmacro;

// variant 3 - macro-powered variant 2
TABLE(x,{x}#expand(__dedupParser(RECORDOF(x))),MERGE);
