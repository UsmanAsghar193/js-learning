// This type of comparison in which data type are same is simple and straightforward 
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);

// Problem Start when datatypes are not same


// String will be converted into Number.
console.log("2" < 1);
console.log("2" == 1);
console.log("2" != 1);
console.log("2" > 1);
console.log("2" <= 1);
console.log("2" >= 1);
console.log("=======================================" );
console.log(null == 0); //null will be converted into undefined for equality check
console.log(null != 0);
console.log(null < 0); // null will be converted into 0 for comparison check
console.log(null > 0);
console.log(null <= 0);
console.log(null >= 0);
console.log("=======================================" );
console.log(undefined == 0);//undefined will be converted into NaN
console.log(undefined != 0);
console.log(undefined < 0);
console.log(undefined > 0);
console.log(undefined <= 0);
console.log(undefined >= 0);