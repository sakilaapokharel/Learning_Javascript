function ExternalFunction(){
    document.getElementById("demo").innerHTML="Text Changed by external JS file";
}

document.write(11+29);

function Add(){
    document.write(11+29);
}

window.alert(11+29);
alert(11);
console.log(11+29);


// Used Variables in Function
function VariableFunction(){
    var s=11;
    var b=29;
    let z=s+b;

    document.getElementById("VarDemo").innerHTML="Value is ="+z;
}