/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here

if (experience <= 50) {
    var presentSalary=startingSalary;
    for (var i = 1; i <= experience; i++) {
        var increment = presentSalary * 0.05; 
        presentSalary= presentSalary + increment;
    }
    console.log(presentSalary.toFixed(2));
}

