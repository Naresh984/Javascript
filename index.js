
// A JavaScript engine is a computer program that executes JavaScript code. ... 
// In a browser, the JavaScript engine runs in concert with the rendering engine via the Document Object Model. 
// The use of JavaScript engines is not limited to browsers.


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

// var arr = [1, 2, 3, 4, 5, 6, 7]
// for (i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

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
// for (i=1;i<arr.length;i++){
//     if(i==3)
//     break       //replace break with continue to know the difference
//     console.log(arr[i]) //note:indexing starts from 0 in js
// }


//ARRAY methods
let myArr = ['fan','camera',34,null, true]
// console.log(myArr.length)
// myArr.pop() //pops an element for the array
// myArr.push('harry')
// myArr.shift()   //removes the first element from the list
// myArr.unshift('mmm') //edit the first element of the list
// console.log(myArr)


//STRING methods in javascript
let myLovelyString = "stefan stefan is a good boi"
// console.log(myLovelyString.length)            // gives the length of string
// console.log(myLovelyString.indexOf("stefan")) //return the first index occurenece of the word
// console.log(myLovelyString.lastIndexOf("stefan"))//returns the last index occurence of the word
// console.log(myLovelyString.slice(0, 3)) //returns from 0index to 3rd index
// console.log(myLovelyString.replace("stefan", "rohan"))//replaces stefan with rohan

//DATES in javascript
let myData = new Date() //declare my myData using let, here new is used decalre new Date
// console.log(myData) 
// console.log(myData.getTime())  //after v use dot(.)get it automatically suggests us
// console.log(myData.getDay())
// console.log(myData.getHours())


//DOM manipulation - Document Object Model
//we can manipulate the html page 
document.getElementById("click").click()
document.getElementById('click').style.border ='blue'
document.getElementById('click').style.border ='5px solid blue'
console.log(document.location)  // v can just use document.location
console.log(document.title)
console.log(document.head)
console.log(document.URL)
console.log(document.scripts)
console.log(document.links)
console.log(document.domain)
//selecting using query - dom
sel = document.querySelector('.container')   //this gave me the first container class from html 
console.log(sel)
sel = document.querySelectorAll('.container')   //this gives me all the container of the class
console.log(sel)

function clicked(){
    console.log('the button was clicked')      
}

window.onload = function(){
    console.log('the document was loaded')
}

//Events in Javascript

firstContainer.addEventListener('mouseover', function(){
    console.log('mouse on container')
})

firstContainer.addEventListener('mouseout', function(){
    console.log('mouse out of container')
})

//Localstorage in javascript -- ( can do this in browser window only)
// v can view local storage in application> local storage

localStorage.setItem('name', 'harry') // to store the item
localStorage.getItem('name') // to get the item

