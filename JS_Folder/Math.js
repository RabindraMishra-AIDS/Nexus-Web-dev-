// Numbers in Javascript

let num=231.3478;
let num1=new Number(231.3478); //Creating it as Non Primitive.
let num2=new Number(231.3478);
console.log(num==num1);
console.log(num1==num2);

//########## To fixed (total digits after decimal). 
console.log(num.toFixed(1));

//########## To Precision (total digits).
console.log(num.toPrecision(3));

//########## To Exponential (total digits).
console.log(num.toExponential(2))

//******************* Maths in Javascript ****************************/
console.log(Math.floor(34.56));

console.log(Math.floor(Math.random()*10)); //Generates random number.

console.log(Math.LN10);

console.log(Math.PI);