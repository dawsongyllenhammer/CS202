const { parseHTML } = require("jquery");

// booleans & comparisons
console.log(true,false, "true", "false")

//mathods that returns a boolean

let email = "justice@justiicebanson.com"

let names = ['Nick', 'Audrey', 'Cole' , 'Dawson'];

// let result - email.includes('@')
let result= email.includes('!');

console.log(result);

// comparison operators

/* let age = 20;

console.log(age == 20); 
console.log;(age== 30);
console.log;(age!= 30);
console.log;(age> 20);
console.log;(age< 20);
console.log;(age>= 20);
console.log;(age<= 20);
 */



// loose comparison 

let age = 20;
//== to check value

console.log(age ==20);
console.log(age == '20');


// strict comparison 
// === datatype and value

console.log(age === 20);
concolse.log(age=== '20');

//password

let password = 'p@ssword22'

console.log(password === 'p@ssword22');