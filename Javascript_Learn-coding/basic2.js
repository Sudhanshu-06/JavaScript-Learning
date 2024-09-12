// global scope
var a=23;
function globalScope() {
    console.log(a);
}
globalScope();

// local scope

function localScope() {
    let b=45;
    console.log(b);
}

localScope();
// console.log(b);

// function scope

function functionScope() {
    var c=67;
    if(true) {
        var d=89;
        console.log(c,d);
    }
    console.log(c,d);

}
functionScope();

// Block scope

function BlockScope() {
    if(true) {
        let c=67;
        const d=89;
        console.log(c,d);
    }
    // console.log(c,d); error

}
BlockScope();

