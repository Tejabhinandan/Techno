let events= require ('events')

let eventEmiter=new events.EventEmitter()

let product=(a,b)=>{
    console.log("Product is :",a*b)
}

eventEmiter.addListener('product',product)

eventEmiter.emit('product',15,2)

// let eventNames=eventEmiter.eventNames()
console.log('eventNames before remove',eventEmiter.eventNames())

eventEmiter.removeListener('product',product)
console.log("eventNames after remove",eventEmiter.eventNames())

let eventEmiter2=new events.EventEmitter()

eventEmiter2.on("myevent1",product)
eventEmiter2.on("myevent2",product)

eventEmiter2.emit("myevent1",10,2)
eventEmiter2.emit("myevent2",10,5)

console.log("eventNames before remove all", eventEmiter2.eventNames())

eventEmiter2.removeAllListeners()

console.log("eventNames after remove all", eventEmiter2.eventNames())