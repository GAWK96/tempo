const names = require('./4-names');
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor');
require('./7-mind-grenade') //Will run the code without assign it to a variable, bc in the module we have invoked a function
// console.log(data)

console.log(names)
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)