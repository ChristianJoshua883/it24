//A. Data types
// Numbers:
let length = 16;
let weight = 7.5; 
// Strings:
let color = "Yellow";
let lastName = "Tulod";
// Booleans
let incorrect = true;
let correct = false;
// Object:
const person = {firstName:"Christian", lastName:"Tulod"};
// Array object:
const motors = ["YAMAHA", "HONDA", "RUSI"];
// Date object:
const date = new Date("2022-03-25");

// B. Arithmetic and logical operators
let x = 5;
let y = 10;

let sum = x + y;
let diff = x - y;
let prod = x * y;
let qou = x / y;
let mod = x % y;

console.log("the sum is " + sum );
console.log("the difference is " + diff );
console.log("the product is " + prod );
console.log("the qoutient is " + qou );
console.log("the modulo is " + mod );

//C. Conditional statements

// if statement
let today = new Date().getDate();
 let greetings, greet, impression;

if(today < 15){
    greetings = "HI goodmorning";
}
 console.log(greetings);

//if else statement 
if (today > 10) {
    greet = "Hi how are you";
}
 else {
    greet = "Im fine thank you";
}
console.log(greet);

// else if statement

if (today > 10) {
    impresstion = "hello people";
} else if (today < 9){
    impression = "mabuhaaaay";
} else {
    impression = "miss youuu";
}
console.log(impression);

 //switch statement

 let day = 2;
 let todaysGreeting;

  switch (day){
    case 1:
        todaysGreeting = "Hi its Day 1 being a js coder beginner";
        break;
    
    case 2:
        todaysGreeting = "Hello its Day 2 being a js coder beginner";
        break;
    
    case 3:
        todaysGreeting = "Goodmorning its Day 3 being a js coder beginner";
        break; 
    
    case 4:
        todaysGreeting = "Good Afternoon its Day 4 being a js coder beginner";
        break;
  } 
    console.log(todaysGreeting);

    // D. Loops

// While
    let loop = 0;
   while(loop < 6){
    loop++;
   }
console.log("The numbers are: " + loop);

// Do While Loop
let text = ""
let i = 0;

do {
  text += "<br>The number is " + i;
  i++;
}
while (i < 10);  

document.getElementById("demo").innerHTML = text;

 //E. functional programming 

 //I. Determine a number if it is odd or even 

 function oddOrEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(oddOrEven(21));
console.log(oddOrEven(12));
 
//II. Determine a number if it is prime number

function prime(num ) {
    let check = true;
    if(num <= 1) {
        check = false;
    }
    for ( let i = 2; i * i <= num; i++  ) {
        if (num % i === 0 ){
            check =  false;
            break;
        }
    }
      if (check) {
        console.log(num + " is a prime number");
      } else {
        console.log(num + " is not a prime number");
      }
    }
prime(10);
prime(5);

// III. Determine a string if it is a palindrome
   function palindrome (pal) {
    let drome = pal.length - 1; 
    for ( let i = 0; i < pal.length / 2; i++ ) {
       if(pal[i] != pal[drome]) {
        return false;
       }
       drome++;
    }
    return true;
   }
   let pal1 = "Tulod";
   let pal2 = 2;
   let pal3 = "Idul";

   console.log(palindrome(pal1));
   console.log(palindrome(pal2));
   console.log(palindrome(pal3));

