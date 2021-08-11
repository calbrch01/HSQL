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
IMPORT $.a;
__r_action_0 := FUNCTION
__r_action_1 := TABLE(a.t1,{ c1 });
__r_action_2 := TABLE(__r_action_1,{ __r_action_1 }#expand(__dedupParser(RECORDOF( __r_action_1 ))),MERGE);
RETURN __r_action_2;
END;
p1 := __r_action_0;
OUTPUT(p1);