import { nDocument } from './namespace/nDocument';

console.log(`nDocument.Document('_table');`);
nDocument.Document('_table');
console.log('\n');

console.log(`nDocument.Document('_table').toJson();`);
nDocument.Document('_table').toJson();
console.log('\n');

console.log(`nDocument.Document('_table').append({ mario: 1, "luigi": 2, toad: [1,2,3]});`)
nDocument.Document('_table').append({ mario: 1, "luigi": 2, toad: [1,2,3]});
console.log('\n');

nDocument.Document('_table').merge({ mario: 2, luigi: 3});

console.log('\n');
console.log('finish');