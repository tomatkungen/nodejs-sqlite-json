import { nDocument } from './namespace/nDocument';

console.log('Start Test');

console.log('-------- document_with_package, package_one --------');

console.log('\n');
console.log(`nDocument.Document('document_with_package', 'package_one');`);
nDocument.Document('document_with_package', 'package_one');

console.log('\n');
console.log(`nDocument.Document('document_with_package', 'package_one').toJson();`);
console.log('> output: ', nDocument.Document('document_with_package', 'package_one').toJson());

console.log('\n');
console.log(`nDocument.Document('document_with_package', 'package').append({ mario: 1, "luigi": 2, toad: [1,2,3], princess: '1', kumba: 2, always: true });`)
nDocument.Document('document_with_package', 'package_one').append({ mario: 1, "luigi": 2, toad: [1,2,3], princess: '1', kumba: 2, always: true });

console.log('\n');
console.log(`nDocument.Document('document_with_package', 'package_one').toJson();`);
console.log('> output: ', nDocument.Document('document_with_package', 'package_one').toJson());

console.log('-------- document --------');

console.log('\n');
console.log(`nDocument.Document('document');`);
nDocument.Document('document');

console.log('\n');
console.log(`nDocument.Document('document').toJson();`);
console.log('> output: ', nDocument.Document('document').toJson()); // error???

console.log('\n');
console.log(`nDocument.Document('document').append({ mario: 1, "luigi": 2, toad: [1,2,3], princess: '1', kumba: 2, always: true });`)
nDocument.Document('document').append({ mario: 1, "luigi": 2, toad: [1,2,3], princess: '1', kumba: 2, always: true });

console.log('\n');
console.log(`nDocument.Document('document').toJson();`);
console.log('> output: ', nDocument.Document('document').toJson());

console.log('\n');
console.log(`nDocument.Document('document').merge({ mario: 2, luigi: 3});`);
nDocument.Document('document').merge({ mario: 2, luigi: 3});

console.log('\n');
console.log(`nDocument.Document('document').toJson();`);
console.log('> output: ', nDocument.Document('document').toJson());

console.log('\n');
console.log(`nDocument.Document('document').removeProperty('luigi');`);
nDocument.Document('document').removeProperty('luigi');

console.log('\n');
console.log(`nDocument.Document('document').toJson();`);
console.log('> output: ', nDocument.Document('document').toJson());

console.log('\n');
console.log(`nDocument.Document('document').removePropertys('princess', 'kumba');`);
nDocument.Document('document').removePropertys('princess', 'kumba');

console.log('\n');
console.log(`nDocument.Document('document').toJson();`);
console.log('> output: ', nDocument.Document('document').toJson());

console.log('\n');
console.log(`nDocument.Document('document').property('toad').value();`)
console.log('> output: ', nDocument.Document('document').property('toad').value());

console.log('\n');
console.log(`nDocument.Document('document').toJson();`);
console.log('> output: ', nDocument.Document('document').toJson());

console.log('\n');
console.log(`nDocument.Document('document').property('woomba').insert({ koopa: 2 });`);
nDocument.Document('document').property('woomba').insert({ koopa: 2 });

console.log('\n');
console.log(`nDocument.Document('document').toJson();`);
console.log('> output: ', nDocument.Document('document').toJson());

console.log('\n');
console.log(`nDocument.Document('document').property('woomba').replace({ koopa: 3 });`);
nDocument.Document('document').property('woomba').replace({ koopa: 3 });

console.log('\n');
console.log(`nDocument.Document('document').toJson();`);
console.log('> output: ', nDocument.Document('document').toJson());

console.log('\n');
console.log(`nDocument.Document('document').property('woomba').set({ poopa: 3 });`);
nDocument.Document('document').property('woomba').set({ poopa: 3 });

console.log('\n');
console.log(`nDocument.Document('document').toJson();`);
console.log('> output: ', nDocument.Document('document').toJson());

console.log('\n');
console.log(`nDocument.Document('document').property('woomba').removeProperty('mario');`);
nDocument.Document('document').property('woomba').removeProperty('mario');

console.log('\n');
console.log(`nDocument.Document('document').toJson();`);
console.log('> output: ', nDocument.Document('document').toJson());

console.log('\n');
console.log(`nDocument.Document('document').property('woomba').removePropertys('always', 'woomba');`);
nDocument.Document('document').property('woomba').removePropertys('always', 'woomba');

console.log('\n');
console.log(`nDocument.Document('document').toJson();`);
console.log('> output: ', nDocument.Document('document').toJson());

console.log('\n');
console.log(`nDocument.Document('document').property('toad').removeAtIndex(2);`);
nDocument.Document('document').property('toad').removeAtIndex(2);

 console.log('\n');
console.log(`nDocument.Document('document').toJson();`);
console.log('> output: ', nDocument.Document('document').toJson());

console.log('\n');
console.log(`nDocument.Document('document').property('toad').removeAtIndexes(0, 0);`);
nDocument.Document('document').property('toad').removeAtIndexes(0, 0);

console.log('\n');
console.log(`nDocument.Document('document').toJson();`);
console.log('> output: ', nDocument.Document('document').toJson());

console.log('\n');
console.log(`nDocument.Document('document').property('toad').valueType();`);
console.log('> output: ', nDocument.Document('document').property('toad').valueType());

console.log('\n');
console.log('-------- package_with_documents, document_one, document_two --------');

console.log('\n');
console.log(`nDocument.Package('package_with_documents', 'document_one', 'document_two')`);
nDocument.Package('package_with_documents', 'document_one', 'document_two');

console.log('\n');
console.log(`nDocument.Package('package_with_documents').Document('document_one').append({"mario":1,"luigi":2,"toad":[1,2,3],"princess":"1","kumba":2,"always":true})`);
nDocument.Package('package_with_documents').Document('document_one').append({"mario":1,"luigi":2,"toad":[1,2,3],"princess":"1","kumba":2,"always":true});

console.log('\n');
console.log(`nDocument.Package('MyPackageName').Document('document_two').append({"mario":1,"luigi":2,"toad":[1,2,3],"princess":"1","kumba":2,"always":true})`);
nDocument.Package('package_with_documents').Document('document_two').append({"mario":1,"luigi":2,"toad":[1,2,3],"princess":"1","kumba":2,"always":true});

console.log('\n');
console.log(`nDocument.Package('package_with_documents').toJson();`);
console.log('> output: ', nDocument.Package('package_with_documents').toJson());

console.log('-------- package_two, document_one, document_two --------');

console.log('\n');
console.log(`nDocument.Package('package_two');`);
nDocument.Package('package_two');

console.log('\n');
console.log(`nDocument.Package('package_two').add('document_one').add('document_two').add('document_three', 'document_four', 'document_five');`);
nDocument.Package('package_two').add('document_one').add('document_two').add('document_three', 'document_four', 'document_five');

console.log('\n');
console.log(`nDocument.Package('package_two').add('document_one').add('document_two').add('document_three', 'document_four', 'document_five', 'document_six');`);
nDocument.Package('package_two').add('document_one').add('document_two').add('document_three', 'document_four', 'document_five', 'document_six');

console.log('\n');
console.log(`nDocument.Package('package_two').Document('document_one').append({"mario":1,"luigi":2,"toad":[1,2,3],"princess":"1","kumba":2,"always":true})`);
nDocument.Package('package_two').Document('document_one').append({"mario":1,"luigi":2,"toad":[1,2,3],"princess":"1","kumba":2,"always":true});

console.log('\n');
console.log(`nDocument.Package('package_two').toJson();`);
console.log('', nDocument.Package('package_two').toJson());

console.log('\n');
console.log(`nDocument.Package('package_two').toArray();`);
console.log('', nDocument.Package('package_two').toArray());

console.log('\n');
console.log(`nDocument.Package('package_two').Document('document_one').property('toad').value();`);
console.log('', nDocument.Package('package_two').Document('document_one').property('toad').value());

console.log('\n');
console.log(`nDocument.Package('package_two').Document('document_one').property('toad').pushEnd({ 'paddan': 1 });`);
nDocument.Package('package_two').Document('document_one').property('toad').pushEnd({ 'paddan': 1 });

console.log(`nDocument.Package('package_two').Document('document_one').property('toad').value()`);
console.log('', nDocument.Package('package_two').Document('document_one').property('toad').value());

console.log('\n');


console.log('\n');
console.log('End Test');
