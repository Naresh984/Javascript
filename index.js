//Semicolons are not required for JavaScript programming, nevertheless I advice you to use it.
// 1.Ways to print in javascript
console.log('hello world how are you');
document.write("this is document write")
// alert('me');

// 2.javascript console API
console.warn("This is a warning")
console.error("This is a error")
console.clear()

// 3.javascript variables
// what are variables?--containers to store data values
var number = 34;
var number2 = 56;
// console.log(number+number2);

// 4.data types in javascript
//At a very high level there are two type of data types
// 1.primitive data types-undefined,null,numbers,string,boolean,symbol
// 2.reference data types-arrays and objects
//Numbers
var num1 = 800;
var num2 = 43;

//String
var str1 = "This is a String"

//Objects
var marks = {
    ravi: 34,
    subham: 45,
    harsha: 34
}
// console.log(marks)

//Booleans
var a = true;
var b = false;
// console.log(a, b);

//var und=undefined
var und         //A variable that has not been assigned a value is of type undefined. 
// console.log(und);

var n = null;
// console.log(n)

var arr = [1, 2, 3, 4, 5]

//Operator in Javascript
//Arthimatic operators
var a = 100;
var b = 10;
// console.log('the value of a + b is', a + b)
// console.log('the value of a _ b is', a - b)
// console.log('the value of a / b is', a / b)
// console.log('the value of a * b is', a * b)

//Assignment opeartors
var c = b;
c += 2;//c=c+2
c -= 2;//c=c-2
// console.log(c)

//Comparison operator
var x = 34;
var y = 54;
// console.log("Is x less than y",x <y)
// console.log("Is x greater than y",x >y)


//Logical operators AND(&&) ,OR(||), NOT(!)
// console.log(true && true)
// console.log(true || false)
//console.log(!false && !false)

//Funtions
//DRY-Do not repeat yourself
function avg(a, b) {
    return (a + b) / 2
}
c = avg(3, 5)
c1 = avg(5, 5)
// console.log(c)
// console.log(c1)

//Conditional Operators
var age = 19;
// if (age > 80) {
//     console.log('You are tooo old to drive')
// }
// else if (age > 18 && age < 79) {
//     console.log('You can drive')
// }
// else {
// console.log('You are too young to drive')
// }


//Loops:-
//for loop

var arr = [1, 2, 3, 4, 5, 6, 7]
for (i=0;i<arr.length;i++){
    console.log(arr[i])
}

// //or we can write it like this

// arr.forEach(function(element){
//     console.log(element)
// })


//WHILE LOOP
// let j = 0; //we will use let in javascript instead of var(this was old but still used)
// while (j < arr.length) {
//     console.log(arr[j])
//     j++
// }

//Do Loop
// do {
//     console.log(arr[j])
//     j++
// } while (j < arr.length)

//break and continue  --- taking example of for loop
for (i=0;i<arr.length;i++){
    if(i==3)
    break       //replace break with continue to know the differ
    console.log(arr[i])
}

