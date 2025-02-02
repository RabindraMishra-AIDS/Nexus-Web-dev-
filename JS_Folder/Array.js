// *************** Array in Javascript *********************

// Note: In Javascript array elements are not stored in continous memory allocation.

let arr=[1,true,"Rabindra",6.89];
console.log(arr);

//Finding Length of an Array
console.log(arr.length);

//Indexing of an Array
console.log(arr[0]); //Does not support negative indexing.

console.log(arr.at(-1)); //supports negative indexing.

//########### Operations on Array ############################

//Adding elements at last.
arr.push("Mishra");
arr.push(false);
console.log("Performed push operation:",arr);

//Adding elements at first.
arr.unshift(2);
console.log(`Array after unshift operation:${arr}`);

//Deleting Last elements of an array.
arr.pop()
console.log(`Array after unshift operation:${arr}`);

//Deleting first elements of an array.
arr.shift();
console.log(`Array after shift operation:${arr}`);

// Delete operation (For specific index)
delete arr[1]; //Creates a empty hole.
console.log(`Array after delete operation:${arr}`);

//################# Finding First and Last Index of an element inside an Array #########################.
console.log(arr.indexOf("Mishra"));
console.log(arr.lastIndexOf("Mishra"));

//######### Determing whether elements exists or not  #####################.
console.log("Result of includes:",arr.includes("Hello"));



//################ Slice vs Splice 
//Slice original array is unaffected while in splice spliced array gets deleted from original array.
//splice(2,5) means it will take 5 elements from index 2.
//slice (last index excluded)

let slice_arr=arr.slice(1,4);
let splice_arr=arr.splice(1,3);
console.log(`arr:${arr}  slice_arr:${slice_arr}  splice_arr:${splice_arr}`);

//Splice Syntax :(starting_index,total_element,add_value);


//########### Array Concatenation ##########################
let arr1=[1,2,4];
let arr2=["hello","hi",true];
let arr3=[false,5.678];

let arr4=arr1.concat(arr2,arr3);
console.log(arr4);


//############## 2D & 3D Array ##################
let arr2d=[1,45,[6,7,"hello",true],false];
console.log(arr2d[2][1]);

let arr3d=[1,45,[6,7,"hello",[Math.LN10],true],false];
console.log(arr3d[2][3][0]);

//######### Flat() operation to simply array ############

//converting 3d array to 1d array needs 2 level of flat.
console.log(arr3d.flat(2));
