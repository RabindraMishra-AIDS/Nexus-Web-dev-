//*********** Comparison Operator *****************

// Comparing number to number (==,<,>,<=,>=).
let a1=1;
let a2=3;

console.log(a1<a2);
console.log(a1==a2);

let num=10;
let str="20"
console.log(num==str); //Convert str to number automatically.

console.log(num<str);

// 1)null == Undefined  (True)
// 2)null === Undefined (False since null is of type object)
//3) Comparing null with all other cases will give false

console.log(null == undefined)

console.log("Understanding Null comparisons")
//Consider this cases.
console.log(null == 0);
console.log(null <0);
console.log(null >0);
console.log(null <=0);
console.log(null >=0 );


console.log("Understanding Undefined comparisons.")
console.log(undefined == 0) //Undefined gets converted to NaN in number
console.log(undefined <= 0);
console.log(undefined >= 0);
console.log(undefined < 0);
console.log(undefined > 0);


console.log(NaN == NaN) //Output is False.
// str3="Rohit"; str4="Mohit"; because converting them into number would give NaN But both are not eual.


console.log("Brain Teaser");
let z1=123
let z2="123";
let z3=123
console.log(z1==z2==z3);

/* *************************** Logical Operator *************************************** */

let age=18;
let money=500;
console.log("Result of First Logic is:",age>=15 && money >500);
console.log("Result of second Logic is:",age>=15 || money >500 );


/* *************************** Bitwise Operator *********************************************/

console.log(4&5); //Biwise And
console.log(4|5); //Bitwise OR
console.log(5<<2);//Left Shift
console.log(4^5); //Xor
console.log(20>>2);//Right Shift.