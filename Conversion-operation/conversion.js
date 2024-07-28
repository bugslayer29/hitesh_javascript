let score = 33

console.log(typeof score)//number
 

let age = "45"
console.log(typeof age) // typeof will be string(due to double quote)  

// let convert that age(which is typeof string) into number

let valueInNumber = Number(age)
console.log(typeof valueInNumber) //typeof will be Number

let number2 = "45agn"
console.log(typeof number2) //string
let valueInNumber2 = Number(number2) 
console.log(typeof valueInNumber2 ) //number
console.log( valueInNumber2) //NaN(not a number)

let something = null
console.log(typeof something) // it will give you object cuz typeof null is object.

console.log(something) // it will give you object cuz anything which contain the value of null so, it's output will be null.
//now, let's convert this null into number.

let NullvalueInNumber = Number(something)
console.log(typeof NullvalueInNumber)//number
//now, print that number------
console.log(NullvalueInNumber)
//it will give you 0.

let something2 = undefined
console.log(something2)
// it will give you undefined, cuz it's type is undefined.
// now, if you convert it into number,

let something2InNumbers = Number(something2)
console.log(typeof something2InNumbers)
//it will give you number
console.log(something2InNumbers)
//if you print that number it will give you NaN(not a number)

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)//output - true
console.log(typeof booleanIsLoggedIn) //output - boolean

let somenumber = 33
 let somenumberInString = String(somenumber)
 console.log(typeof somenumberInString)

