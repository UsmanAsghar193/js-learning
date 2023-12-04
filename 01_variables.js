const accountId = 123456
let accountEmail = "js_learning@google.com"
var password = "xyz123"
cityName = "Paris"
postalCode = 11111

// accountId = 654321 // Cannot Change the value const variable
console.table([accountId, accountEmail, password, cityName, postalCode])
console.log("========== AFTER CHANGE ==========");

accountEmail = "js_learning@github.com"
password = "pqr456"
cityName = "Washington DC"
postalCode = 22222

console.table([accountId, accountEmail, password, cityName, postalCode])


/*
    Prefer not to use var keyword for variable declaration
    Because of issue in block scope & functional scope
*/