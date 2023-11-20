const fs = require ("fs")

// reading asynchronously
fs.readFile('./texts/red.txt','utf-8', (err, data)=>{
    if(err){
        throw Error ('Error Reading text')
    }
    // console.log(data)

    // writing text asynchronously

    fs.writeFile('./texts/read2.txt', data, 'utf-8',(err)=>{
        if(err){
            throw Error('Error writing data')
        }
    })
})
console.log('testing asynchronous')