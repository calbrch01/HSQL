export a:= MODULE
export l1:= {integer c1,integer c2};
export l2:= {integer c3,integer c4};

  export t1:= DATASET([{1,2},{3,4},{4,5}],l1);
  export t2:=DATASET([{1,3},{3,5},{3,5}],{integer c3,integer c4});
END;
