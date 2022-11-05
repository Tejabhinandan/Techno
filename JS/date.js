let todayDate=new Date()
console.log("todayDate",todayDate)

let futureDate=new Date(2050,2,16,12,8)
console.log("futureDate",futureDate)

let timeinmill=new Date(490345305)
console.log("timeinmill",timeinmill)

console.log("year",todayDate.getFullYear())
console.log("month",todayDate.getMonth())
console.log("date",todayDate.getDate())
console.log("hours",todayDate.getHours())
console.log("mins",todayDate.getMinutes())
console.log("seconds",todayDate.getSeconds())
console.log("day",todayDate.getDay())

let dayInWeek=[
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurday",
    "Friday",
    "Saturday"
]
let todaysdate =dayInWeek[todayDate.getDay()]
console.log("todaysdate",todaysdate)