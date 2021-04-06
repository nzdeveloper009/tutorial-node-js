//Fs Module
const {readFile,writeFile} = require('fs'); 

// readFile('./content/first.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(result);
// })

console.log('start');

//call back function

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `here is the result : ${first}, ${second}`,
            (err,result)=>{
                if(err)
                {
                    console.log(err);
                    return;
                }
                console.log('done with this task');

            })
    })
})
console.log('starting next task');