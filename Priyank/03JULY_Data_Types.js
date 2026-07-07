// Variable declaration keywords
// VAR ----- re declare and re assign
// let ----- re assign but not re declare
// const ---  neither re assign nor re declare




// // Data Types in JavaScript

// // Primitives Data types and Non-Primitives Data types
// // Primitive -- Mutable 
// // String, Number, Boolean, NULL, Undefind

// //string - '', ""
// let name = 'Swati'
// // for Print statement ---- console.log()

// console.log(name)
// console.log('***************************')


// //Number - 12, 0, 1.4
//  let age = 100

//  console.log(age)
//  console.log('***************************')

// //Boolean - True/False
// let PlaceNoida = false

// console.log(PlaceNoida)

// //NULL 
// let place = null
// console.log(place)


// //To run any script --------------
// //right click on file left side -- open integrated terminal 
// //node .\{file name}


// // Non-Primitives
// //  Array,Object, Function

// //Array 
// // VAR declaration Variable_name = []
// // array - when we store multiple elements data in a single array
// //let Details = [90,1.4,'Swati',true, false, 'huppp']

// //console.log(Details)


// //Indexing in Array
// // -- Postioning
// // strt with 0
// //             0   1    2     3     4         5
// let Details = [90,1.4,'Swati',true, false, 'huppp']

// console.log(Details[2])




// // 07 JULY -----------------------------------

// // Array -4-5 data 
// // print all data
// // print any random data --- Indexing


// let places = ['Noida','Delhi','CP','Jankpuri','VP','Rohini']
// console.log(places)

// console.log(places[5])

// console.log('*****************************************************')

// // let arrname = [[],[],[]]

// // Indexing ----
//  //              0  1   2   3       4
// // let arr = [100,90,89,'NAME','Hello']
// //               0              1             2
// //              0   1   2     0   1    2    0   1   2
// let StdName = [['A','B','C'],['P','S','T'],['X','Y','Z']]

// console.log(StdName)
// console.log(StdName[1][1])


// // length ---- 

// console.log(StdName.length) // Total size of array



// console.log('*****************************************************')

 //Chutur Mutur Function/Methods

//  const add = 'My Name is Swati and I am living in Noida'
// console.log(add)
//console.log(add.length)
//console.log(add.charAt(0))
// console.log(add.toUpperCase())
// console.log(add.toLowerCase())
//ignorecase
//console.log(add.ignoreCase) // sab hata dega
//trim --- spaces remove karta h --- starting and end wale
//console.log(add.trim())
// includes --- 
//console.log(add.includes('Nobody'))

// replace and Mreplace all 
// replace ---char/value 
//console.log(add.replace('Noida','Bareli'))
//replacd all ----- replace sab kar sakta similar word
//console.log(add.replaceAll(' ',''))
// start and end with
// start with --- start --- 
//console.log(add.startsWith('My'))
//console.log(add.endsWith('Noida'))

// slice, substring
//console.log(add.slice(11,16))
//console.log(add.substring(10,20))

//split ---- string ko Array function me change kar sakta hai 

//console.log(add.split('      '))




// let str=   "Priyank Srivastava";
// console.log(str.length);//length of the string
//  console.log(str.charAt(8))//to find the character at a specific index
// // //same tareeka to find char - 
//  console.log(str.charAt(str.length-10));//to find the character at a specific index

//  console.log(str.toUpperCase());//to convert the string to uppercase
//  console.log(str.toLowerCase());//to convert the string to lowercase
//  console.log(str.ignoreCase);//to ignore the case of the string

//  console.log("####################################################")

// let newname="   My Name is Priyank Srivastava       "
// console.log(newname);

//  console.log(newname.trim()); // remove all the space from the start and end of the string

// // //includes method is used to check if a string contains a specific substring. It returns true if the substring is found, and false otherwise.
//  console.log(newname.includes("Priyank"));

// // //Indexing --
// // //       01234567891011-----
// newname="My Name is Priyank Srivastava and I am learnig JavaScript"
// console.log(newname)

// console.log(newname.length) // to find the length of the string

// // //startsWith method is used to check if a string starts with a specific substring. It returns true if the string starts with the specified substring, and false otherwise.

// console.log(newname.startsWith("My"));

// // //endsWith method is used to check if a string ends with a specific substring. It returns true if the string ends with the specified substring, and false otherwise.

//  console.log(newname.endsWith("Script"));


// // //slice method is used to extract a portion of a string and return it as a new string. -- like as substring function  

// console.log(newname.slice(0,11)); // to extract the first 11 characters of the string (11 wala include nahi hoga)
// console.log(newname.substring(0,11)); //same slice wala

// // //replace method is used to replace a specified value with another value in a string. 
 
// // console.log(newname.replace("My","New")) // concern -- My replace nahi ho raha.. 

// // //replaceAll method is used to replace all occurrences of a specified value with another value

// console.log(newname.replaceAll(" "," "))// it will change all space to *

// // //split method is used to split a string into an array of substrings

// console.log(newname.split("           ")) 

// indexof ----- positioning 
//console.log(add.indexOf('w'))

// const add = 'My Name is Swati and I am living in Noida'.split(' ')
// console.log(add)

// console.log(add.indexOf('Swati'))





// 07 July ---------------------------------

// const sentence = 'Reading books is one of the best habits a person can develop. Books provide knowledge, improve vocabulary, and help us understand different cultures, ideas, and experiences. They stimulate our imagination and encourage creative thinking. Regular reading also strengthens concentration, memory, and critical thinking skills, which  Swati are useful in both academic and professional life.'.split(' ')
// console.log(sentence.length)
// console.log(sentence.indexOf('Swati'))


// Object ----------- storing multiple array--- in a single object 
// 

let office = {

    asset : ['laptop'],
    empl : ['Priyank','Swati'],
    team : [[1,2,'A'],[56,'NEW']]

}

console.log(office.team)


