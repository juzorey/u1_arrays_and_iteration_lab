

/*
UNDERSTANDING: 5
Section: 1
1. How do we assign a value to a variable?

- Which line(s) is/are valid?


  let a = 0;   //his
  const b = 1;  //this
  9 = a;
  b = b + 5;
  
2. How do we change the value of a variable?

a = 0 override

3. How do we assign an existing variable to a new variable?

a = b

*/
//let a = 0;

//a = 3;

//console.log(a);

//## Section 2. Let's get Mathy!

/*
UNDERSTANDING: 5
Section: 2
- Round `a` down
- Round `b` up
- Find the absolute value of `b - a`
- Find the largest number of `a, b, c, d, e`
- Find the smallest number of `a, b, c, d, e`
- Find the square root of `e`
- Raise `e` to the power of `d`
- Make a digital die 0 generate a random number between 1 - 6 

const a = 42.78
const b = 1.1
const c = -2
const d = .5
const e = 16

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.abs(b-a));
console.log(Math.max(a, b, c, d, e));
console.log(Math.min(a, b, c, d, e));
console.log(Math.sqrt(e));
console.log(Math.pow(e, d));
console.log(Math.random(1)*6);
*/

/*
UNDERSTANDING: 6
## Section: 3 Strings

### Strings - Switcharoo
1. Create a variable called `firstVariable`.
1. assign it the value of a string: `"Hello World"`
1. On the next line, change the value of this variable to a number.
1. store the value of `firstVariable` into a new variable called `secondVariable`
1. On the next line, change the value of `secondVariable` to a string.
1. What is the value of `firstVariable`?

### Strings - Combine it
1. Create a variable called `yourName` and set it equal to your name as a string.
  - Write an expression that takes the string "Hello, my name is " and the variable `yourName` so that it prints a new string with them concatenated

>ex: `Hello, my name is Jean Valjean`

let firstVariable = 'Hello World';
firstVariable = 50;

let secondVariable = firstVariable;
secondVariable = 'money';
// value oof firstVariable is 50
let yourName = "Jose Reyes";
console.log(`Hello, my name is ${yourName}`);
*/

/*
UNDERSTANDING: 5
## Section 6. Driver's Ed

1) Write a variable that will hold a person's age.

2) Write code that will print out "Here are the keys", if the age is 16 years or older.

3) Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."


let age = 23;

if( age >= 16){
  console.log("Here are the Keys") 
}
else{
console.log("Sorry, you'res too young")
}
*/

/*
UNDERSTANDING: 5
Problems: attempting with while
ection 7. Just Loop It
1) Write code that will print out all the numbers in the range 0 - 10.

2) Write code that will print out all the numbers in the range  500 - 50.
*/
/*
for( let i = 0; i <= 10; i++){
  console.log(i);
}
for( let i = 500; i >= 50 ; i--){
  console.log(i);
}

let i = 0;
while(i <=10){
  console.log(i)
  i++
}
*/

/*
UNDERSTANDING: 5
## Section 8. Let's get odd
1) Print out the odd numbers that are within the range of 1 - 100.

2) Adjust your code to add a message next to the odd number that says: "is an odd number".

>Example Output:
```
3 is an odd number
5 is an odd number
7 is an odd number
```*/
/*
for(let i = 0; i<= 100; i++){
  if( i % 2 != 0) 
  console.log(`${i} is an odd number`);
}
*/


