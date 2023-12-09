let score = "01";

// console.log(typeof score);
// console.log(typeof(score));

let scoreInNumber = Number(score)
// console.log(typeof scoreInNumber);
// console.log(scoreInNumber);

let str = "Usman"
let boolStr = true
let strInNumber = Number(str);
// console.log(strInNumber);
// console.log(typeof strInNumber);

/* Conversions Result To Number
    "33" => 33
    "33abc" => NaN
    true => 1; false => 0
*/


let strToBool = "false"
let numToBool = 1

let strToBoolConvert = Boolean(strToBool);
// console.log(strToBoolConvert);
// console.log(typeof strToBoolConvert);

let numToBoolConvert = Boolean(numToBool);
// console.log(numToBoolConvert);
// console.log(typeof numToBoolConvert);

/*  Conversion Result to Bool
    1 => true; 0 => false
    "" => false
    "hitesh" => true
*/

let someNumber = 33;

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
