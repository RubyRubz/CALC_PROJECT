exports.simple =  (e, calculator) => { //anonymous function in es6 format
//START EDITS    
    //show mode on calculator screen 
    document.getElementById("mode_screen").innerHTML = "Mode: Simple"; 

    if ( e.target.dataset.type === "num" && !calculator.operator) {        
        calculator.n1 = (calculator.n1 == 0) ? e.target.dataset.value : calculator.n1 + e.target.dataset.value        
    }




    console.log(calculator);
    //show number on calculator screen  
    document.getElementById("calc_screen").value = calculator.n1;     

    console.log(`xxx button with value: ${e.target.dataset.value} was just clicked. its type is ${e.target.dataset.type}  :: simple.js`)
//END EDITS    
};
