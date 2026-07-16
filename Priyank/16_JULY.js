//Types of function in JavaScript
// 1. Function Declaration

//Syntax -------
/*
function function_name (parameter)  {
Code/statement/Print
}
//function ()
*/

// function username() {
//     console.log('User is Correct')
// }

// function password (){
//     console.log ('Passwrd Correct')
// }
// //Function call karna
// username()
// password()

/// overriding the function --- Updated wala function jo hoga wo hi call karega

// function login(user){
//     console.log('User name is :' + user)
//     console.log('Test')
//     console.log('HI')
// }

// function login(user){
//     console.log('User name is :' + user)
//     console.log('Test')
// }

// function login(user){
//     console.log('User name is :' + user)
    
// }

// login()

// Providing Value to parameter

// function login(user, password){
//     console.log('User name is :' + user)
//     console.log('Password is :' + password)

// }

// login('Swati','12345')


//function declaration 
// Create function for Login 

// function username(User) { // function name = username and it takes one parameter = 'User'
//  return User // always pass paramaeter after return statement   
//  //console.log("Hello User") // this line will never be executed because it is after the return statement

// }

// function password(pass) {
//     return pass
// }

// function TC1(){
// Name= username("Priyank") ;// function call
// PassCode= password(123456) ; // = se pehle koi bhi random function name de sakte hai, = ke bad jo function upar banaya hai uska name dena hai aur uske andar value pass karna hai.
// if (Name==="Priyank"&& PassCode===123456){ // yahan pe jo upar random function name diya hai usko use karna hai, aur uske andar parameter pass karna hai
// console.log('Login Success')
// } else {
//     console.log("Login nahi hua")
// }}

// TC1()



function username (user){
    return user
    //console.log('')
}

function password (password){
    return password
}

function login (){
Name = username('SwatiS')
pass = password(12345)
if (Name =='Swati' && pass ==12345){
    console.log('Login Success')
}else{
    console.log('Login Failed')
}
}
login()


// Arrow Function 
/*
function Function_name (){
}
// Arrow
1. Single thread execute/print karne k liye

const name = function_name => console.log() // variable define 

2. Multiple thread execute karne k liye

const name = function_name => {
    console.log()
    console.log()
    console.log()
    }

*/




