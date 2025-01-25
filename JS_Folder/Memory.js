// Primitive (Immutable) vs Non Primitive (Mutable)

let obj1={
    id:10,
    name:"Rabindra Mishra"
}
let obj2=obj1;
obj2.id=2;
console.log(obj1)  //Changes in obj1 will be reflected.(Non Primitive)
