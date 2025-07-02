// taking input screen of a calculator
const display = document.getElementById("display");

console.log(display);
 
function takeNumberOrSymbol(value){
    display.value += value; 

    // if clicking buttons multiple times and taking value exceeding the screen size limit.then,
    if(display.value.length > 16){
        display.value = "Out Of Range";
    }


}

function allClear(){
    display.value = "" ; 
}


function calculate(){
    let result = eval(display.value);


    //if the result is integer, then 
    if(result%1 == 0){
        display.value = result ; 
    }
    else{
        display.value = result.toFixed(5)
    }

    
}


function remove(){
    display.value = display.value.slice(0,-1); 
}
