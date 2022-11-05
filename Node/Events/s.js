const EventEmitter = require('events')
let events= require('events')

let eventemiter= new EventEmitter

let add=(a,b)=>{
 console.log("add:",a+b)
}

eventemiter.addListener('add',2,3) 
eventemiter.addListener('add',add)
eventemiter.emit('add',3,6)

eventemiter.on("e",add)
eventemiter.emit('e',3,9)