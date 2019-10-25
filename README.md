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

    @return Class.CreateDocument
*/
Document.create('<documentName>').appendJson('<Json>');

// Return json from Class.Document
Document.getDocument('<documentName>').toJson();

// Return Class.Document.Key
Document.getDocument('<documentName>').property('<key>');
Document.getDocument('<documentName>').property('<key>').key('<key>');

// Return Value from Class.Document.Key
Document.getDocument('<documentName>').property('<key>').value();

// Insert Json  to Class.Document.Key No override if exist, Create if not exist
Document.getDocument('<documentName>').property('<key>').insert('<Json>');

// Replace Json to Class.Document.Key Override if exist, No create if not exist
Document.getDocument('<documentName>').property('<key>').replace('<Json>');

// Set Json to Class.Document.Key Override if exist, Create if not exist
Document.getDocument('<documentName>').property('<key>').set('<Json>');

// Merge Json into Document
Document.getDocument('<documentName>').merge('<Json>');

// Remove Property in Json Document
Document.getDocument('<documentName>').removeKey('<key>');
Document.getDocument('<documentName>').removeKeys(['<key>', '<key>']);

// Remove Item at Index in Array by key property
Document.getDocument('<documentName>').proprty('<key>').removeAtIndex('<number>');
Document.getDocument('<documentName>').proprty('<key>').removeAtIndexs(['<number>', '<number>']);
// Return value type  <Object | Array | Integer | real | true | false | null | text | NULL>
Document.getDocument('<documentName>').proprty('<key>').valueType();

```

### Package Doocuments

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

    @return Class.PackageDocument
 */
Document.createPackage('<PackageName>')
        .add('<DocumentName1>')
        .add('<DocumentName2>', '<DocumentName3>')

// Return Class.Package
Document.getPackage('<PackageName>')

// Return value as Json { <d1>:..., <d2>:.. }
Document.getPackage('<PackageName>').toJson();

// Return value as Array [d1:.., d2:...]
Document.getPackage('<PackageName>').toArray();

// Return Class.Document
Document.getPackage('<PackageName>').getDocument('<DocumentName>');
```
