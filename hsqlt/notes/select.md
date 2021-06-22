## Doing a `select`

1. Create a function and assign it to a value
2. Enumerate all the sources that have been changed, or need processing - JOINS, select in select and aliases.
  a. JOINS - do a join
  b. select in select - follow this procedure and assign it to its alias
  c. Aliases - assign the original value to the alias
3. Now, take _all_ the sources, and join them all. 
4. Take last generated variable and then do the following in order
  a. Where - apply filter
  b. sort - sort
  c. group and column filters - table
  d. limit offset - choosen
  e. distinct - dedup all
5. return the last generated variable.
6. The variable assigned to the function on step 1, is now the result