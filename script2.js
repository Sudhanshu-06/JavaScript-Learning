/*
Is js interpretd and compiled
Hoisting
Execution context
this
Prototypes
*/

console.log(myname);
var myname="xyz";


show();
function show(){
    console.log('show',age);
    var age=90;
}