let events= require ('events')

let EventEmiter= events.EventEmitter
let eventEmiter =new EventEmiter()



eventEmiter.emit('test')
eventEmiter.emit('test')

eventEmiter.on('add',(a,b)=>{
    console.log("add",a+b)
})
eventEmiter.on('product',(a,b)=>{
    console.log("product",a*b)
})
eventEmiter.on('sub',(a,b)=>{
    console.log("sub",a-b)
})

let eventNames=eventEmiter.eventNames()
console.log("eventNames",eventNames)

eventEmiter.emit('add',12,32)
eventEmiter.emit('product',22,12)
eventEmiter.emit('sub',230,32)
console.log("==================================================")


