const EventEmitter = require('events')
const MyEvent = new EventEmitter()

MyEvent.on ('birthday', () =>{
    console.log('Happy Birthday To You')
})

MyEvent.on('birthday', (gift1) =>{
    console.log(`I will give a ${gift1}`)
})

// MyEvent.on('birthday', (gift1,gift2) =>{
//     console.log(`I will give a gift what You wont ${gift1} or ${gift2}`)
// })

MyEvent.emit('birthday', 'Bike');
// MyEvent.emit('birthday', 'Bike', 'Cycle');