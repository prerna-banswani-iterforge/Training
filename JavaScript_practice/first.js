let a= 10;
var b= 15;
// const b= 13;

// change a's value
a=50;
console.log(a);

for(let i =1; i < b; i++){
    console.log("i =" , i);
}

// Addition



// Contcatinating number n string
let str= "123";
let num = 456;

console.log(str + 456);

// Define const 
// const empty;

// Boolean

let age = 28;
if(age< 18){
    console.log("No Driving license");
}

else if(age= 30){
    console.log("Renuw js");
}



//  forEach Loop in arrays: Uses Callback function
let arr=[1,2,3,4,5];

arr.forEach((val, idx, arr) =>{
    console.log(val, idx, arr);
});

    // 
arr.forEach((val) =>{
console.log("Mehtod 1 to print square" ,val * val);
});


        // OR
let calcSquare = (num) =>{

    console.log("Method 2 to print Square" ,num *num);
}

arr.forEach(calcSquare);


// break continue?


// CallBack Function.
function calcResult(marks, call){
    let avg= marks/5;
    console.log("Percent :" ,avg);
    call(avg);
}

calcResult(350, (average)=>{
    if(average >= 40){
        console.log("Pass");

    }
    else{
        console.log("Fail");
    }
});

//  Students Task manager

let stu =[
    {name: "Amit" , marks:50},
    {name: "Neha" , marks: 80},
    {name: "Sia" , marks: 75}
];
// Push 
function addStudent(name, marks){
    stu.push({name, marks});
    console.log(stu);
}

addStudent("Tia", 66);

// Pop
function deleStu(){
    let removed_stu = stu.pop();
    console.log("removed Student is :" ,removed_stu);
}

deleStu();


// For Each Loop
const showStu =() =>{
    stu.forEach((stu, idx) =>{
        console.log(idx+1, stu.name, stu.marks);
    });
};

let students = showStu();
console.log(students);



// Map Method for Arrays

let gradedStu = stu.map((stus) =>{
    return {
        name: stus.name,
        marks: stus.marks,
        grades: stus.marks >= 40 ? "Pass" : "Fail"


    };
    
});

console.log(gradedStu);

// Hoisting: Will show intialization error if function is called before declaring.
// Function declaration defines a function directly and is hoisted, while function expression stores a function in a variable and cannot be used before initialization.
// greet();

// function greet(){
//     console.log("Greeting");
// }

// This will work


// Function expression 
// greet();
// const greet = function() {
//   console.log("Hi");
// };

// This will give error bcz variable using const or let are not hoisted before declaration.



// Scope:
// Variable that is declared insisde a function is onlylimitted to that function
function greet() {
  let message = "Hello";
  console.log(message);
}

// greet();
// console.log(message); //This will throw an error


// Element selector

// By ID
let heading = document.getElementById("title");

console.log(heading);


// By Class
let para = document.getElementsByClassName("info");

console.log(para);

// Change Content
para[0].textContent = "Changing 1st P tag";
console.log(para);

// Styling element
for(i=0; i<para.length; i++){
    para[i].style.color ="blue";
}

// Adding element
const addBtn = document.getElementById("addBtn");
const studentList = document.getElementById("studentList");

addBtn.addEventListener("click", () => {

const newStu =document.createElement("li");
newStu.textContent ="This is new Stu";
studentList.appendChild(newStu);

});

// Deleting Element
const removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", () => {

  const lastStu = studentList.lastElementChild;
  
    studentList.removeChild(lastStu);
  

});



// Objects

// Object Creation
const emp ={

    name: "Rahul",
    age: 24,
    emp_id :101,
    city :"Mumbai"
}


// Accessing methods . & []
console.log(emp.name);
// OR [] mostly used when property is dynamic or when property is stored in a variable
console.log(emp["name"]);

let key ="age";
console.log(emp[key]);


// Methods in Objects
// can also store behavior (actions).

const emp1 ={
    name :"rohit",
    roll : 33,
    age: 24,

    introduce : function(){
        console.log(`name is ${emp1.name} roll ${emp1.roll} age ${emp1.age}`);
    }
};

emp1.introduce();


//This keyword: Instead of hardcoded writing the exact name use this so that even if te name changes there wont be issue.
// Arrow function do not have thier own this keyword they take it ouside of their loop.

const emp2 ={
    name: "Raj",
    roll: 33,
    age: 22,
    lastName: "Sharma",

    introduce() {
        console.log("name is " , this.name);
    }
};

emp2.introduce();

// Using Arrow keyword
const user = {
  name: "Rahul",

  greet: () => {
    console.log(this.name);
  }
};

user.greet();


// Shallow Copy & Deep Copy in case of promitive data types the op for shallow as well as Deep is same 

// const emp3 ={
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000
// };

// console.log(emp3);

// // Shallow copy
// let emp3Shallow = {...emp3};
// console.log("OG new emp ", emp3Shallow);
// emp3Shallow.eid = 54;
// console.log("Shallow Copy", emp3Shallow);

// // Deep copy
// let emp3DeepCopy = JSON.parse(JSON.stringify(emp3));
// emp3DeepCopy.address = "Zimbabwe";
// console.log("Original:", emp3);
// emp3DeepCopy.address = "Monaco";
// console.log("Deep Copy:", emp3DeepCopy);
 


// Show copy & Deep copy 

let employee = {
  name: "Jack",
  salary: 50000,
  address: {
    city: "New York",
    country: "USA"
  }
}; 
// shallow
 
let shallowCopy = { ...employee }; //spread Operator
shallowCopy.address.city = "Monaco";
console.log("Original:", employee);
console.log("Shallow Copy:", shallowCopy);

 
// deep
let deepCopy = JSON.parse(JSON.stringify(employee));
deepCopy.address.city = "Prais";
console.log("Original:", employee);
console.log("Deep Copy:", deepCopy);
 
// In shallow copy it changes in parent as well as the copy 
// In deep it only changes in the copy


// Closures
// Closures make it possible for a function to have "private" variables.
// A closure is a function that has access to the parent scope, after the parent function has closed.



// Suppose you want to use a variable for counting something, and you want this counter to be available to everyone (all functions).
let counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();
// OP => 1 2 3

// There is a problem with the solution above: Any code on the page can change the counter, without calling add().

// Solution JS inner function can solve this 
// JavaScript supports nested functions. Nested functions have access to the scope "above" them.

function sum() {
  let counter = 0;
  function plus() {
    counter += 1;
    }
  plus();   
  return counter;
}

sum();  //OP-> 1



// Lexical Scope 
// A function can access variables based on where it is written (defined) in the code — NOT where it is called.

// eg:


let globalVar = "I'm in the global scope"; //Global

function outerFunction() {
  // Outer function scope
  let outerVar = "I'm in the outer function";

  function innerFunction() {
    // Inner function scope
    let innerVar = "I'm in the inner function";
    console.log(globalVar); // Accesses global scope variable
    console.log(outerVar);  // Accesses parent scope variable
    console.log(innerVar);  // Accesses local scope variable
  }

  innerFunction();
}

outerFunction();
// console.log(innerVar); // ReferenceError: innerVar is not defined (cannot access child scope)

// eg
let name = "Global";

function show() {
    console.log(name);
}

function test() {
    let name = "Local";
    show();
}

test();
// OP-> Global : becaise here the show function was created in global scope So it remembers Global var.JS ignores calling location.


// 