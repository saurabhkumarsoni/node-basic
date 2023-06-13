
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;


// for(i=0; i<5;i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt", "a sample text file of file hello" + i+ ".txt file")
// }

// fs.readdir(dirPath, (err, files)=>{
//     files.forEach((file)=>{
// console.log('item', file)
//     })
// })


// crud 
// create
// fs.writeFileSync(filePath, 'this is a simple text file');

// read
// fs.readFile(filePath, 'utf8', (err, item) =>{    // if you will not give utf8 than gives buffer error 
//     console.log(item);
// })

// fs.appendFile(filePath, 'and file name is apple.txt', (err)=>{
//     if(!err){
//         console.log('file is updated')
//     }
// })


// // rename file
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{
//     if(!err){
//         console.log('file name is updated')
//     }
// })

// delete file
fs.unlinkSync(`${dirPath}/fruit.txt`);


// buffer - means temporary memory allocation to perform task

