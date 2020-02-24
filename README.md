# sqlite3 Json1 Extension Wrapper for NodeJS

Install

* Version SQLite version 3.9.0 (2015-10-14) or higher
* Nodejs version 8.5.x or higher

### Create Document

```Javascript
/*
    Document

    Creates json structure
    {
        ...
    }

    @return Class.Document
*/
Document.create('<documentName>').append('<Json>');

// Return json from Class.Document
Document.document('<documentName>').toJson();

// Return Class.Document.Key
Document.document('<documentName>').property('<key>');
Document.document('<documentName>').property('<key>').key('<key>');

// Return Value from Class.Document.Key
Document.document('<documentName>').property('<key>').value();

// Insert Json  to Class.Document.Key No override if exist, Create if not exist
Document.document('<documentName>').property('<key>').insert('<Json>');

// Replace Json to Class.Document.Key Override if exist, No create if not exist
Document.document('<documentName>').property('<key>').replace('<Json>');

// Set Json to Class.Document.Key Override if exist, Create if not exist
Document.document('<documentName>').property('<key>').set('<Json>');

// Merge Json into Document
Document.document('<documentName>').merge('<Json>');

// Remove Property in Json Class.Document
Document.document('<documentName>').removeKey('<key>');
Document.document('<documentName>').removeKeys(['<key>', '<key>']);

// Remove Item at Index in Array Class.Document.Key
Document.document('<documentName>').property('<key>').removeAtIndex('<number>');
Document.document('<documentName>').property('<key>').removeAtIndexs(['<number>', '<number>']);

// Remove Property in Json Class.Document.Key
Document.document('<documentName>').property('<key>').removeKey('<key>');
Document.document('<documentName>')..property('<key>').removeKeys(['<key>', '<key>']);

// Return value type  <Object | Array | Integer | real | true | false | null | text | NULL>
Document.document('<documentName>').property('<key>').valueType();

```

### Create Package Document

```Javascript
/*
    Class.Package

    Creates json structure
    {
        <PackageName>: {
           <DocumentName1> : ...
           <DocumentName2> : ...
           <DocumentName3> : ...
        }
    }

    @return Class.Package
 */
Document.createPackage('<PackageName>')
        .add('<DocumentName1>')
        .add('<DocumentName2>', '<DocumentName3>')

// Return Class.Package
Document.package('<PackageName>')

// Return value as Json { <d1>:..., <d2>:.. }
Document.package('<PackageName>').toJson();

// Return value as Array [{d1}, {d2}...]
Document.package('<PackageName>').toArray();

// Return Class.Document
Document.package('<PackageName>').document('<DocumentName>');
```
