// #################### Objects in Javascripts ################################
const obj={
    name:"Rabindra",
    age:20,
    gender:"Male",
    Role:"Backend Developer"
}
console.log(obj)
console.log(`Typeof Object:${typeof obj}`);

//Accesing Key Value of Object.
console.log(obj.Role,obj.name);

//Method 2: For Acessing the variables
console.log(obj["gender"],obj["Role"]);

//##### We can also define key as a number
const obj1={
    0:"Hello",
    1:23,
    3:45.7
}
//See this looks similiar to array ie. In Backend array is implemented as Object.
console.log(obj1["0"],obj1[0]);

//Can we use null,undefined as a key?
const obj3={
    null:2,
    undefined:"Hello"
}
console.log(obj3.null,obj3.undefined);

//############# New way of creating a Object ####################
const obj4= new Object()  //new keyword calls a constructor.

//Adding the Properties
obj4.name="Mishra";
obj4.age=30;
obj4.hobby="Chess";
console.log(obj4);

//  Deleting a Property
delete obj4.hobby;
console.log(obj4);

//Updating a Property
obj4.name="Anurag";
console.log(obj4);