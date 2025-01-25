// Primitive (Immutable) vs Non Primitive (Mutable)

let obj1={
    id:10,
    name:"Rabindra Mishra"
}
let obj2=obj1;
obj2.id=2;
console.log(obj1)  //Changes in obj1 will be reflected.(Non Primitive)


/* **************** const in Non Primitive ********************************* */
const obj={
    id:1,
    name:'rabindra'
}
obj.id=2;
console.log(obj)  //Here it will not throw error due to const because reference is not changing.

obj=obj1 //It will throw error since we are passing address of obj1 in obj(const) ie.chnaging refrence. 
