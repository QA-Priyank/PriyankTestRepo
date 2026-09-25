// // // // // // // // hoisting
// // // // // // // // console.log(abc)

// // // // // // // // const abc = 'Priyank'

// // // // // // // // +, - , *, /, %, **

// // // // // // // //console.log(!true)

// // // // // // // // ternary op
// // // // // // // // ? :

// // // // // // // // same as if else concept

// // // // // // // // const age = 17

// // // // // // // // if(age>=18){
// // // // // // // //     console.log('eligible for Vote')

// // // // // // // // }else{
// // // // // // // //     console.log('Not eligible')

// // // // // // // // }

// // // // // // // // condtion ? value1 : value2

// // // // // // // // const age = 27

// // // // // // // // let abcds = age>=18 ? 'Vote' : 'Not Ele'

// // // // // // // // console.log(abcds)

// // // // // // // //var 1

// // // // // // // // outcome/condition - multiple cases but ek condition
// // // // // // // /*
// // // // // // // let var_name = ?
// // // // // // // switch (var_name){
// // // // // // // case 1:
// // // // // // //     console.log('ABC')
// // // // // // // break;
// // // // // // // case 2:
// // // // // // //     console.log('ABCD')
// // // // // // //     break;
// // // // // // // }
// // // // // // // */

// // // // // // // let day = 2;

// // // // // // // switch (day) {
// // // // // // //   case 1:
// // // // // // //     console.log("Monday");
// // // // // // //     break;
// // // // // // //   case 2:
// // // // // // //     console.log("Tuesday");
// // // // // // //     break;
// // // // // // // }

// // // // // // // function -- block of code

// // // // // // // - function declaration -- function use
// // // // // // // - function expression -- fnction -- var store karte ho

// // // // // // function login(name, passw) {
// // // // // //   // parameter
// // // // // //   console.log(name + passw);
// // // // // // }

// // // // // // login("Test", 7676); // arguement

// // // // // // // const var1 = function () {
// // // // // // //   console.log("Name is NO");
// // // // // // // };

// // // // // // // var1();

// // // // // // // declaration // expression

// // // // // // // function keyword initializing

// // // // // // function login11(USName, PWName) {
// // // // // //   console.log(USName + PWName);
// // // // // // }

// // // // // // const aaaa = login11("ABCD", 1234);
// // // // // // console.log(aaaa);

// // // // // // return statement
// // // // // //

// // // // // // function names() {
// // // // // //   // console.log("HI");
// // // // // // }

// // // // // // names();

// // // // // // // undefined O/P -

// // // // // // const jj = names();
// // // // // // console.log(jj);

// // // // // // function returnStatement() {
// // // // // //   return "HI New";
// // // // // // }

// // // // // // const jj = returnStatement();
// // // // // // console.log(jj);

// // // // // // const gg = function (a, b) {
// // // // // //   return [a, b];
// // // // // // };

// // // // // // const yu = gg(12, 9);
// // // // // // console.log(yu);

// // // // // // // return  obj -

// // // // // // function objCall() {
// // // // // //   return {
// // // // // //     newname2: "SS",
// // // // // //     surname: "SH",
// // // // // //   };
// // // // // // }

// // // // // // const obj1 = objCall();
// // // // // // console.log(obj1);

// // // // // // function Fname() {
// // // // // //   return "HUpppppppp";
// // // // // // }

// // // // // // function Lname(ab) {
// // // // // //   return [ab, Fname()];
// // // // // // }

// // // // // // const popo = Lname("Name");
// // // // // // console.log(popo);

// // // // // /// Arrow Function

// // // // // // function key word ka use nahi krte h
// // // // // // =>

// // // // // // syntax

// // // // // // const name100 = () => {
// // // // // //   return "Hi Arrow Function";
// // // // // // };

// // // // // // const hup = name100();
// // // // // // console.log(hup);

// // // // // const arrowFunction = (name) => {
// // // // //   return name;
// // // // // };

// // // // // const hhh = arrowFunction("QA Test");
// // // // // console.log(hhh);

// // // // // // implicit and explicit return
// // // // // /*
// // // // // Explicit return → you write return by yourself
// // // // // Implicit return → JavaScript returns the expression automatically, mainly with arrow functions
// // // // // */

// // // // // // explicit -

// // // // // const fruits = (apple) => {
// // // // //   return apple;
// // // // // };

// // // // // const zz = fruits("Apple fruit");
// // // // // console.log(zz);

// // // // // // implicit

// // // // // const fruits1 = (apple1) => apple1;

// // // // // const zz1 = fruits1("Implicit fruit");
// // // // // console.log(zz1);

// // // // // Object
// // // // // we can enter multiple values in a single obj

// // // // // syntax

// // // // const places = {
// // // //   plc1: "A",
// // // //   plc2: "B",
// // // // };

// // // // console.log(places["plc2"]);

// // // // // add

// // // // places.plc3 = 100;
// // // // console.log(places);

// // // // // delete

// // // // delete places.plc1;
// // // // console.log(places);

// // // // console.log("plc1" in places);

// // // // Array
// // // // put multiple values in a single array

// // // // syntax

// // // const SS = ["SS1", "SS2", 100, true];
// // // console.log(SS);

// // // // push() and pop()

// // // // push() -- add values in array in the end

// // // SS.push(200, 400);
// // // console.log(SS);

// // // // pop() -- remove value in array from the end

// // // SS.pop();
// // // console.log(SS);

// // // // shift() and unshift()

// // // // unshift()  - add values from the strating of the ARRAY

// // // SS.unshift("SS0", "SS-1");
// // // console.log(SS);

// // // // shift() - remove value in array from the beginning

// // // SS.shift();
// // // console.log(SS);

// // // var x = 10;
// // // if (true) {
// // //   var x = 20;
// // // }
// // // var x = 25;
// // // console.log(x);

// // // let x = 10;
// // // if (true) {
// // //   x = 20;
// // // }
// // // x = 111;
// // // console.log(x);

// // // Promise

// // // resolve() -- success

// // // reject() -- Failure

// // // syntax

// // const abcd = new Promise((resolve, reject) => {
// //   resolve("Success");
// //   //reject("failure");
// // });

// // // // .then() and .catch() --- then -- success store and catch failure store
// // // // .finally -- it will print at the end of promise - success/failure

// // // abcd
// // //   .then((a) => {
// // //     console.log(a);
// // //   })
// // //   .catch((b) => {
// // //     console.log(b);
// // //   })
// // //   .finally(() => {
// // //     console.log("This is the final result");s
// // //   });

// // ///////////////////////////////////////////////////////////////////////////////

// // // Async
// // // await -- async ---- sync order

// // // promise.all

// // // it will not give you the final result untill all promises done

// // let d1 = "food1";
// // let d2 = "food2";
// // let d3 = "food3";

// // // const abcd = Promise.all([d1, d2, d3]);

// // // abcd.then((a) => {
// // //   console.log(a);
// // // });

// // // promise.allSettled -- it will tell everything (what happend to every promise) with status

// // // const abcd = Promise.allSettled([d1, d2, d3]);

// // // abcd
// // //   .then((a) => {
// // //     console.log(a);
// // //   })
// // //   .catch((b) => {
// // //     console.log(b);
// // //   })
// // //   .finally(() => {
// // //     console.log("Finally");
// // //   });

// // // Promise.race() -- whichever Promise finishes FIRST

// // // const abcd = Promise.race([d1, d2, d3]);

// // // abcd
// // //   .then((a) => {
// // //     console.log(a);
// // //   })
// // //   .catch((b) => {
// // //     console.log(b);
// // //   })
// // //   .finally(() => {
// // //     console.log("Finally");
// // //   });

// // // promise.any

// // const abcd = Promise.any([d1, d2, d3]);

// // abcd
// //   .then((a) => {
// //     console.log(a);
// //   })
// //   .catch((b) => {
// //     console.log(b);
// //   })
// //   .finally(() => {
// //     console.log("Finally");
// //   });

// //String methods:
// //indexing  01234567891011121314151617
// // let str = "Hi My name is Test QA";

// // console.log(str.length); //length of the string with spaces

// // console.log(str.charAt(2)); //to find the character at a specific index

// // // //same tareeka to find char -
// // console.log(str.charAt(str.length - 1)); //to find the character at a specific index

// // console.log(str.toUpperCase()); //to convert the string to uppercase
// // console.log(str.toLowerCase()); //to convert the string to lowercase

// // console.log(str.ignoreCase); //to ignore the case of the string

// // console.log("####################################################")

// let newname = "   My Name is Priyank Srivastava       ";
// // console.log(newname);

// // console.log(newname.trim()); // remove all the spaces from the start and end of the string

// // // //includes method is used to check if a string contains a specific substring.
// // // It returns true if the substring is found, and false otherwise.
// // console.log(newname.includes("Priyank"));

// // //Indexing --
// // //       01234567891011-----
// newname = "My Name My is Priyank Srivastava is and I am  is learnig JavaScript";
// console.log(newname);

// // console.log(newname.length) // to find the length of the string

// // //startsWith method is used to check if a string starts with a specific substring.
// // It returns true if the string starts with the specified substring, and false otherwise.

// console.log(newname.startsWith("M"));

// // //endsWith method is used to check if a string ends with a specific substring.
// // It returns true if the string ends with the specified substring, and false otherwise.

// console.log(newname.endsWith("ipt"));

// // //slice method is used to extract a portion of a string and return it as a new string. -- like as substring function

// console.log(newname.slice(1, 13)); // to extract the first 11 characters of the string (11 wala include nahi hoga)
// console.log(newname.substring(0, 13)); //same slice wala

// // //replace method is used to replace a specified value with another value in a string.

// console.log(newname.replace("My", "New"));

// // //replaceAll method is used to replace all occurrences of a specified value with another value

// console.log(newname.replaceAll("is", "NEWPP")); // it will change all space to *

// // //split method is used to split a string into an array of substrings

// console.log(newname.split(" ")); // it will change all string into array

// Iteration & Transformation

// forEach() -- it will iterate through the array and perform the specified action on
// each element of the array

// map() -- it will iterate through the array and perform the specified action on
// each element of the array and return a new array with the modified elements

// filter() -- it will iterate through the array and perform the specified action on
// each element of the array and return a new array with the elements that pass the test

// reduce() -- it will iterate through the array and perform the specified action on
// each element of the array and return a single value

//forEach()

const arrNew = [1, 2, 3, 4, 5];

arrNew.forEach(function (num) {
  console.log(num * 3);
});
