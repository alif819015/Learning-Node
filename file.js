const fs = require('fs')

// reading a file text

const readText = fs.readFileSync('./texts/red.txt', 'utf-8')
console.log(readText);

// writing a text
const writtenText = fs.writeFileSync('./texts/write.text', readText + 'this is my writing')
console.log(writtenText)