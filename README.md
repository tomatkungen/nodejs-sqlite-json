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
nDocument.Document('<documentName>').append('<Json>');

// Return json from Class.Document
nDocument.Document('<documentName>').toJson();

// Return Class.Document.Property
nDocument.Document('<documentName>').property('<property>');
nDocument.Document('<documentName>').Property('<propery>').property('<property>');

// Return Value from Class.Document.Property
nDocument.Document('<documentName>').Property('<property>').value();

// Insert Json  to Class.Document.Property No override if exist, Create if not exist
nDocument.Document('<documentName>').Property('<property>').insert('<Json>');

// Replace Json to Class.Document.Property Override if exist, No create if not exist
nDocument.Document('<documentName>').Property('<property>').replace('<Json>');

// Set Json to Class.Document.property Override if exist, Create if not exist
nDocument.Document('<documentName>').Property('<property>').set('<Json>');

// Merge Json into Document
nDocument.Document('<documentName>').merge('<Json>');

// Remove Property in Json Class.Document
nDocument.Document('<documentName>').removeProperty('<property>');
nDocument.Document('<documentName>').removePropertys(['<property>', '<property>']);

// Remove Item at Index in Array Class.Document.Property
nDocument.Document('<documentName>').Property('<property>').removeAtIndex('<number>');
nDocument.Document('<documentName>').Property('<property>').removeAtIndexs(['<number>', '<number>']);

// Remove Property in Json Class.Document.property
nDocument.Document('<documentName>').Property('<property>').removeProperty('<property>');
nDocument.Document('<documentName>').Property('<property>').removePropertys(['<property>', '<property>']);

// Return value type  <Object | Array | Integer | real | true | false | null | text | NULL>
nDocument.Document('<documentName>').Property('<property>').valueType();

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
nDocument.Package('<PackageName>')
        .add('<DocumentName1>')
        .add('<DocumentName2>', '<DocumentName3>')

// Return Class.Package
nDocument.Package('<PackageName>')

// Return value as Json { <d1>:..., <d2>:.. }
nDocument.Package('<PackageName>').toJson();

// Return value as Array [{d1}, {d2}...]
nDocument.Package('<PackageName>').toArray();

// Return Class.Document
nDocument.Package('<PackageName>').document('<DocumentName>');
```
