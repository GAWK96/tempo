const {readFileSync, writeFileSync} = require('fs');
console.log('start');
//readFileSync need 2 parameters: path of the file and what's the encoding
const first = readFileSync("./content/subfolder/first.txt","utf8")
const second = readFileSync("./content/subfolder/second.txt","utf8")

console.log(first, second)

writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`,{ flag: "a"})

console.log('done with this task');
console.log('starting with this task');