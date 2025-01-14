//Operators in Javascript
// Arithmatic Operators +,-,/,*,%(Modulus)
// Priority in JS Operator  1)Divide Multiply {Left to Right} 2) Add Subtract {Left to Right}
console.log(6*3 + (18/3) - 9 );   //output : 15 {18 + 6 -9} 

//Note using brackets are considered good practice.

console.log(20%3) //Provides Remainder.

//++ Increement, -- Decreement Operator.
let sum =20;
console.log(++sum);  //Pehle increement hoga then print hoga.
total=sum++ //IN this case total is storing the old value of sum and then value of sum is being updated.
console.log(sum);


//Assignment Operator
let x=10
x+=10
console.log(x) //Output:- 20

let y=30
y/=3
console.log(y) //output:-10