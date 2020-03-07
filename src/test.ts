import { nDocument } from './namespace/nDocument';

console.log('Start Test');

console.log('\n');
console.log(`nDocument.Document('_table');`);
nDocument.Document('_table');

console.log('\n');
console.log(`nDocument.Document('_table').toJson();`);
console.log('> output: ', nDocument.Document('_table').toJson());

console.log('\n');
console.log(`nDocument.Document('_table').append({ mario: 1, "luigi": 2, toad: [1,2,3], princess: '1', kumba: 2, always: true });`)
nDocument.Document('_table').append({ mario: 1, "luigi": 2, toad: [1,2,3], princess: '1', kumba: 2, always: true });

console.log('\n');
console.log(`nDocument.Document('_table').toJson();`);
console.log('> output: ', nDocument.Document('_table').toJson());

console.log('\n');
console.log(`nDocument.Document('_table').merge({ mario: 2, luigi: 3});`);
nDocument.Document('_table').merge({ mario: 2, luigi: 3});

console.log('\n');
console.log(`nDocument.Document('_table').toJson();`);
console.log('> output: ', nDocument.Document('_table').toJson());

console.log('\n');
console.log(`nDocument.Document('_table').removeProperty('luigi');`);
nDocument.Document('_table').removeProperty('luigi');

console.log('\n');
console.log(`nDocument.Document('_table').toJson();`);
console.log('> output: ', nDocument.Document('_table').toJson());

console.log('\n');
console.log(`nDocument.Document('_table').removePropertys('princess', 'kumba');`);
nDocument.Document('_table').removePropertys('princess', 'kumba');

console.log('\n');
console.log(`nDocument.Document('_table').toJson();`);
console.log('> output: ', nDocument.Document('_table').toJson());

console.log('\n');
console.log(`nDocument.Document('_table').property('toad').value();`)
console.log('> output: ', nDocument.Document('_table').property('toad').value());

console.log('\n');
console.log(`nDocument.Document('_table').toJson();`);
console.log('> output: ', nDocument.Document('_table').toJson());

console.log('\n');
console.log(`nDocument.Document('_table').property('woomba').insert({ koopa: 2 });`);
nDocument.Document('_table').property('woomba').insert({ koopa: 2 });

console.log('\n');
console.log(`nDocument.Document('_table').toJson();`);
console.log('> output: ', nDocument.Document('_table').toJson());

console.log('\n');
console.log(`nDocument.Document('_table').property('woomba').replace({ koopa: 3 });`);
nDocument.Document('_table').property('woomba').replace({ koopa: 3 });

console.log('\n');
console.log(`nDocument.Document('_table').toJson();`);
console.log('> output: ', nDocument.Document('_table').toJson());

console.log('\n');
console.log(`nDocument.Document('_table').property('woomba').set({ poopa: 3 });`);
nDocument.Document('_table').property('woomba').set({ poopa: 3 });

console.log('\n');
console.log(`nDocument.Document('_table').toJson();`);
console.log('> output: ', nDocument.Document('_table').toJson());

console.log('\n');
console.log(`nDocument.Document('_table').property('woomba').removeProperty('mario');`);
nDocument.Document('_table').property('woomba').removeProperty('mario');

console.log('\n');
console.log(`nDocument.Document('_table').toJson();`);
console.log('> output: ', nDocument.Document('_table').toJson());

console.log('\n');
console.log(`nDocument.Document('_table').property('woomba').removePropertys('always', 'woomba');`);
nDocument.Document('_table').property('woomba').removePropertys('always', 'woomba');

console.log('\n');
console.log(`nDocument.Document('_table').toJson();`);
console.log('> output: ', nDocument.Document('_table').toJson());

console.log('\n');
console.log(`nDocument.Document('_table').property('toad').removeAtIndex(2);`);
nDocument.Document('_table').property('toad').removeAtIndex(2);

 console.log('\n');
console.log(`nDocument.Document('_table').toJson();`);
console.log('> output: ', nDocument.Document('_table').toJson());

console.log('\n');
console.log(`nDocument.Document('_table').property('toad').removeAtIndexes(0, 0);`);
nDocument.Document('_table').property('toad').removeAtIndexes(0, 0);

console.log('\n');
console.log(`nDocument.Document('_table').toJson();`);
console.log('> output: ', nDocument.Document('_table').toJson());

console.log('\n');
console.log(`nDocument.Document('_table').property('toad').valueType();`);
console.log('> output: ', nDocument.Document('_table').property('toad').valueType());

console.log('\n');
console.log(`nDocument.Package('MyPackageName');`);
nDocument.Package('MyPackageName');

console.log('\n');
console.log(`nDocument.Package('MyPackageName').add('MyDocumentOne').add('MyDocumentTwo');`);
nDocument.Package('MyPackageName').add('MyDocumentOne').add('MyDocumentTwo');

console.log('\n');
console.log(`nDocument.Package('MyPackageName').Document('MyDocumentOne').append({"mario":1,"luigi":2,"toad":[1,2,3],"princess":"1","kumba":2,"always":true})`);
nDocument.Package('MyPackageName').Document('MyDocumentOne').append({"mario":1,"luigi":2,"toad":[1,2,3],"princess":"1","kumba":2,"always":true});

console.log('\n');
console.log(`nDocument.Package('MyPackageName').toJson();`);
console.log('', nDocument.Package('MyPackageName').toJson());

console.log('\n');
console.log(`nDocument.Package('MyPackageName').toArray();`);
console.log('', nDocument.Package('MyPackageName').toArray());

console.log('\n');
console.log(`nDocument.Package('MyPackageName').Document('MyDocumentOne').property('toad').value();`);
console.log('', nDocument.Package('MyPackageName').Document('MyDocumentOne').property('toad').value());

console.log('\n');
console.log('End Test');