// coditonal statements
let myName='sudhansh'
if(myName=='sudhanshu'){
    console.log("my name is sudhanshu");
}else{
    console.log("my name is not sudhanshu");
}

let num1=6;
if(num1==8){
    console.log("num1 is 8");
}else if(num1==9){
    console.log("num1 is 9");
}else{
    console.log("num1 is not found");
}


let num2=8;
if(num2<10){
    if(num2<9){
        console.log("no is small than 9");
    }
}else{
    console.log("no2 is greater than 6");
}


let expression=2;


switch(expression){
    case 1:
    console.log("expression is equal to 1");
    break;
    case 2:
    console.log("expression is equal to 2");
    break;
    default:
        console.log("expresssion is not equal to 1 and 2");
}

// ternary operator
// condition? true:false

let purchase=20;
let discount=purchase>=20?3:0
console.log(discount);

