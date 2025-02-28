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


//############### Using Class ########################
class people {
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
}

let per1= new people("Rabindra",20,"Male");
console.log(`Per1 name :${per1.name}`); //This method increases productivity.

let per2= new people("Rohi",40,"Female");
console.log(per2);

//Fetching out all the keys of class
const arr=Object.keys(per1);
console.log(arr)

//Fetching out all the values.
const arr1=Object.values(per1)
console.log(arr1)

//Fetching key,values in the form of arrays.
console.log(Object.entries(per1));

//Combining two Objects [Method 1: assign()]
const per3={a:1,b:2};
const per4={c:5,d:6};

const obj5=Object.assign({},per3,per4);
console.log(`object5:${obj5}`);

//Combining two Objects [Method 2: spread operator]
const obj6={...per3,...per4}
console.log(`Object6 (spread):${obj6}`)

//Note: Wherevr there is heap memory you will find Object datatype in use.