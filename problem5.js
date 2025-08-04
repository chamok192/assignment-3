/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here 

var email = student.name + student.roll + "." + student.department + "@ph.ac.bd";

console.log(email);

// for mixed case input 
// var email = student.name.toLocaleLowerCase() + student.roll + "." + student.department.toLocaleLowerCase() + "@ph.ac.bd";

// console.log(email);