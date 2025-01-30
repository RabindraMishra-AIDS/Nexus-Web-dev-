//Declaring String in Javascript.

let str1="Hello Bachho!!.";                /* Using Double quotes */
let str2='Learning Strings.';             /* Using Single quotes */
let str3=`My name is Rabindra.`;         /* Using Backticks */

console.log(str1,str2,str3);

//######### How access Variables inside a string ######################
let price=50;
console.log(`The price is: ${price}`)
console.log("Price of product is",price)//Not a good approach



//################### String Concatenation ########################
let fname = "Rabindra";
let Lname=" Mishra";
let name=fname+Lname;
console.log(name)

//################### String Length ########################
console.log("length of string is:",fname.length);

//################### Printing with qotation ########################
console.log('"Hello Baccho kaise ho"');

//################### Indexing in Strings ########################
console.log(fname[0]);
console.log(fname.charAt(3));

// ################### Lowercase & Uppercase ########################
console.log(fname.toLocaleUpperCase());
console.log(fname.toLocaleLowerCase()); //Note original string will not change.

// ################### Searching in String ########################
let hero ="Superman";
console.log(hero.indexOf("man"));

let s="man is good man";
console.log(s.lastIndexOf("man"));

console.log(s.includes("man"))

// ################### Replacing in String ########################
let newstr="Hello ji kaise ho sablog ji";
console.log(newstr.replace("ji","Money"));
console.log(newstr.replaceAll("ji","Money"));

// ################### New way of declaring out the strings ########################
let str20= new String("My name is amar akbar anthony"); //Here string is declared as an Object.
console.log(typeof str20)

// ################### Splitting strings ########################
let s1="Mannu,bannu,sannu";
console.log(s1.split(","));