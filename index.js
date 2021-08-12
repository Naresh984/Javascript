
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
var und;
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
c -=2;//c=c-2
// console.log(c)

//Comparison operator
var x=34;
var y=54;
// console.log("Is x less than y",x <y)
// console.log("Is x greater than y",x >y)


//Logical operators AND(&&) ,OR(||), NOT(!)
// console.log(true && true)
// console.log(true || false)
console.log(!false && !false)
