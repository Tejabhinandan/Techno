var validator = require('validator');

let validEmail= validator.isEmail('foo@bar.com');
let Email= validator.isEmail('foo');

console.log("validEmail",validEmail)
console.log("Email",Email)