// if statements
//if statements- 
//if, else if, 
/* valid = false;

if (false){
    console.log( 'run your code');
}else if (false){
    console.log('Run thiss code tho');
}else {
    console.log('run this code');
} */

/* const age = 20;

if(age > 20) {
    console.log('you are over 20 years old');
}else if (age === 20) {
    console.log('You are equal to the age group');
}else{
    console.log('You are less than the age group')
}
 */
//password

/* const passwor = 'password8989'

if(password.length >= 8) {
    console.log('Your password is fairly strong');
}else if(password.length>= 12 ){
    console.log('Your password is very strong');
}else{
    console.log('Your password is very weak');
}
 */
//logical operators ||OR,,, && AND,,  ! NOT
const email = 'Justice@bansone.com'
if(email.length >= 12 && email.includes('@')){
    console.log('your email is correct');
}else if(email.length >=9 || email.includes('@')){
    console.log('your email is fairly correct');
}else{
    console.log('your email is weak');
}

//password != conformpassword

/* if (!user) {}
    console.log('you cannot log into the account
}*/

console.log(!true);
console.log(!false);