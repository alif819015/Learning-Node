// local modules
const {add,a} = require('./local-1')
const {add:add2,a:a2} = require('./local-2')

console.log(a,add(2,3))
console.log(a2,add2(2,3,5))

// built in modules
const path = require("path")
console.log(path.dirname("C:/Project/5~Node/Learning-Node/index.js"))
console.log(path.parse("C:/Project/5~Node/Learning-Node/index.js"))
console.log(path.join("C:/Project/5~Node/Learning-Node", "local-1.js"))
