//################## Date in Javascript ################################
const d =new Date();
console.log(d); //printing current date and time

//Note: in JS we calculate time from system clock and it is measured in milliseconds from January 1,1970.
//This milliseconds is then converted to a date.

console.log(d.getDay()); //Sun{0},Mon{1},tue{2}
console.log(d.getFullYear());
console.log(d.getMonth()); //Gives Month as a output
console.log(d.getTime());

//######### Different date format in Javascript.
console.log(d.toDateString());
console.log(d.toLocaleDateString());
console.log(d.toISOString());
console.log(d.toLocaleTimeString());

//########### Calculating date based on Milliseconds.
const d1=new Date(20000);
console.log(d1)

//############# Creating custom dates ###################
//Note: Method 1=>Number {0 based} , Method 2=>String {1 based}

const customd1=new Date("2022-11-30T12:12:59"); //string based using Time (12 bajke 12 minute 59 seconds)
const customd2=new Date(2024,0,12); //Number {0 based}.
console.log(`customd1 :${customd1}   customd2:${customd2}`);

//SYNTAX: new Date(year,month,day,hours,minutes,seconds,milliseconds)

//Method 2: of defining custom date
const customd3=new Date();
customd3.setMonth(0);
customd3.setHours(13);
customd3.setFullYear(2023);
customd3.setDate(29);
console.log(customd3.toLocaleTimeString());

//########## Calculations with date in Javascript  ##############################.
console.log(customd2-customd1);
console.log(customd2>customd1);


//# Hw Try to create a CountDown Timer.