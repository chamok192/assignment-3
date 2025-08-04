/** Problem 04 - (Delete / Store) */
var fileName = "#exp.mp4";
//write your code here
var output;
switch(true){
    case fileName.startsWith('#') || fileName.endsWith('.pdf') || fileName.endsWith('.docx'):
        output='Store';
        break;
    default:
        output='Delete';
}
console.log(output);