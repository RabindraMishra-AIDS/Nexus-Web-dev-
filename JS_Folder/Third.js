//Non primitive Data Types
//Array,Object,Function

let arr =[10,44,"Raun",false] //Can accept any type of data unlike c/c++.
console.log(arr) //Typeof arr is object.
console.log(typeof arr)




//Object Datatype
//Uses Key Value pairs
let obj = {
user_name:"Rabindra",
acc_number:56,
balance:420
}
console.log(obj,typeof(obj))

//Function 
//Note:- Typeof function is also a function in Javasccript.
let fun = function(){
    console.log("Hello welcome to Javascript.")
}
fun(); //Function Call.


//-----------------------------------------Type Conversion-----------------------------------------------------

let account_Ballance="100";  //But not every string gets converted into number eg:"100y".
let num=Number(account_Ballance);
console.log(num,typeof(num));

let is_Loggedin=true
let n=Number(is_Loggedin);
console.log(n,typeof(n)); //Output is 1

let x1=null;
console.log(Number(x1)); //output is 0 (null)

let x2; //Convering NaN
console.log(Number(x2))//Output is NaN.

//****************************String************************************
let x3=25;
console.log(String(x3))

let x4=false;
console.log(String(x4))

//*********** Boolean**************
let x5=""; //even for space it would provide output as true. beacuase space is also a character.
console.log(Boolean(x5)); //false 

let x6=34;
console.log(Boolean(x6));

//************************ HW (Bigint) ******************************//