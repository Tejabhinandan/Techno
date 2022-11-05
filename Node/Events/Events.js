let events= require ('events')

// return the class of eventemiter
let EventEmiter= events.EventEmitter
// instance of EventEmiter
let eventEmiter =new EventEmiter()

// publishing the event
eventEmiter.on('test',()=>{
    console.log("test event executed")
})
eventEmiter.on("test",()=>{
    console.log("test1 event executed")
})

// subscribe to the event
// it will executed all the event of same name
eventEmiter.emit('test')
eventEmiter.emit('test')

eventEmiter.once('add',(a,b)=>{
    console.log("add",a+b)
})

let eventNames=eventEmiter.eventNames()
console.log("eventNames",eventNames)

eventEmiter.emit('add',12,32)
eventEmiter.emit("add",12,32)

// let eventNames=eventEmiter.eventNames()
// console.log("eventNames",eventNames)

let eventEmiter2= new EventEmiter()
eventEmiter2.on('print',()=>{
    console.log("print exectued")
})

eventEmiter2.emit('print')
eventEmiter2.emit('print')