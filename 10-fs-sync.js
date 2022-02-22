const {readFileSync, writeFileSync, read} = require('fs');
Console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')

const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first,second)
//flag akan menambahkan data, jika tidak pakai flag maka data akan di replace
writeFileSync('./content/result-sync.txt', `Here is the Result : ${first}, ${second}`,{flag: 'a'})
console.log('done with the task')
console.log('starting the new one')