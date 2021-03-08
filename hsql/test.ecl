import visualizer;
Layout_Person := RECORD
  UNSIGNED1 PersonID;
  UNSIGNED4  someNum;
END;

allPeople := DATASET([ {1,15},
                       {2,16},
                       {3,18}],Layout_Person);

OUTPUT(allPeople,NAMED('barChart'));
Visualizer.MultiD.Bar('barChart',,'barChart',,,);

//  Outputs  ---
