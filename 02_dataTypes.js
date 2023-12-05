"use strict"; // Treat all Js code as newer version.

// alert(3 + 3) // alert will only work in browser . we are using node.

/*
console.log("Hello") console.log("World");
This will throw an error . To run it we have to put ; in front of 1st console.log()

console.log("Hello"); console.log("World"); 
This will run smoothly but it's not a best practice. As it decrease READABILITY

console.log(3
     + 
     3);
     
Another Bad Practice . Which decrease READABILITY.

CODE READABILITY SHOULD BE HIGH
*/



let userId = 25
let userName = "ABCD"
let isLoggedIn = false

//++++++++++ PRIMITIVE DATATYPES ++++++++++
//number => 2^53 is the range of number
// bigint
//string => can be used in "" or '' . Mostly Preferred is ""
//boolean =>can Either true or false

//undefined => when we declare a variable but did'nt define a value in it.
let response1;
//console.log(response1);
//console.log(typeof(response1));

//null => A data type + standalone value + it's an object
let response2 = null;
//console.log(response2);
//console.log(typeof(response2));

//symbol => when we talk about uniqueness , we use symbol datatype.

//object


console.table([typeof(userId),typeof(userName),typeof(isLoggedIn)]);