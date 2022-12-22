exports.simple =  (e, calculator) => { //anonymous function in es6 format
//START EDITS    
    //show mode on calculator screen 
    document.getElementById("mode_screen").innerHTML = "Mode: Simple"; 

    if ( e.target.dataset.type === "num" && !calculator.operator) {        
        calculator.n1 = (calculator.n1 == 0) ? e.target.dataset.value : calculator.n1 + e.target.dataset.value        
    }

    if ( e.target.dataset.type === "back" && !calculator.operator) {        
        calculator.n1 = (calculator.n1.length < 2 ) ? 0 : calculator.n1.slice(0,-1);        
    }

    if ( e.target.dataset.type === "clear" ) {        
        calculator = {
          n1: 0, //initial concatenated digits
          n2: 0, //last concatenated digits
          operator: null, //mathematical operations that should be initiated
          mode: 'Simple', //default mode of calculator i.e.
          modes: ['Simple', 'Scientific', 'Converter'] //array of calculator modes (i.e. everytime mode button is clicked it will cycle to the next mode of this array)      
        }       
    }




    console.log(calculator);
    //show number on calculator screen  
    document.getElementById("calc_screen").value = calculator.n1;     

    console.log(`xxx button with value: ${e.target.dataset.value} was just clicked. its type is ${e.target.dataset.type}  :: simple.js`)
//END EDITS    
};
