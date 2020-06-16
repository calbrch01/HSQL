

export dummy := module
    
    export Layout1 := RECORD
        INTEGER col;
        STRING25  col2;
    END;
    export Layout2 := RECORD
        INTEGER  col3;
        STRING  col4;
    END;
    export someTable := TABLE(DATASET([{1,'foo'}], Layout1));
    export someTable2 := TABLE(DATASET([{2,'bar'}], Layout2));
end;