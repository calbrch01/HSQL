export marks := MODULE
  export rec:= {integer subid, real marks, integer testNumber} ;
  export subs:= DATASET([
      {1,'ENGLISH'},
      {2,'MATH'},
      {3,'CHEMISTRY'},
      {4,'PHYSICS'}
  ],{integer subid,string subname});
  export marks:= DATASET([
      {1,45,1},{1,43,2},{1,46,3},{2,31,1},{2,33,2},{2,35,2},
      {3,31,1},{3,33,2},{3,35,3},{4,39,1}],rec);
END;