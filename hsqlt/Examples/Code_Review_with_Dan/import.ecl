IMPORT $.demoDS;
OUTPUT(demoDS.ds,);



## Import

Imports, being the simplest to use feature in this language, surprisingly a lot of background work.

### Syntax

```
IMPORT <module> [AS <alias>];
```

Imports a `.hsql`/`.ecl` module for use.
Only values exported from the imported module are available for use. The `.` operator can be used to access the values exported by the module.

### ECL vs HSQL imports

#### ECL imports

HSQLC cannot parse `.ecl` files, and hence such imports will not have strict variable checks, ie. **the identifier will not be well defined**.
Eg. importing `foo` from `foo.ecl` will allow `foo.someTable` even if its not actually exported.

##### Definitions

To fix this issue of not being able have strict checks on imports.
A `.d.hsql` file can be present along with the ecl file, using the appropriate `map export` statements to instruct HSQL the types to appropriately enforce them.

#### HSQL files

HSQL modules are imported, and the imported identifier is well defined, and the types are checked stricty.

HSQL files that have been imported may also be translated and written to their corresponding files (using the `-d` flag, refer to [hsqlc's arguments](hsqlc/index.md)).

### Examples

```hsql
import foo as bar;
import baz;
```

All tables/layouts exported by `foo`, can be accessed as `bar.someTable` (Simply, `bar` becomes the name of the identifier). Similarly, the tables exported by `baz`, will be `baz.someTable`.