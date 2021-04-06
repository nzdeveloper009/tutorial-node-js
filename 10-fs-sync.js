//FS
// yes, we have option of interacting  with filesystem and the module 
// the ma of the module is FS(file system)
//essentialy there are two flavors
//When it comes to file module we can do it asynchronously non-blocking 
// or we can it synchronouslly which is going to be blocking


//What are the differences and
// why you should prefer one over the other one.
//------------------------------------------------------

const {readFileSync,writeFileSync} = require('fs'); 
        // OR
// const fs = require('fs'); 
// fs.readFileSync

console.log('start');

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
console.log(first,second);



writeFileSync(
    './content/result-sync.txt',
    `Here is thee result: ${first}, ${second}`,
    { flag: 'a' }
)

console.log('done with  this task');
console.log('starting the next one');