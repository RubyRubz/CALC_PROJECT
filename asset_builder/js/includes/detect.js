//Include separated files
const simple = require('./simple.js');
const scientific  = require('./scientific.js');
const convert  = require('./convert.js');

exports.click =  (e, calculator) => { //anonymous function in es6 format
//START EDITS  
    let modeIndex = e.target.dataset.value;

    if ( e.target.dataset.type === "mode" ) {  
        //cycle thru array of calculator.modes        
        let modeValue = (modeIndex + 1) % (calculator.modes.length); 
        e.target.dataset.value = modeValue      
        //assign mode to corresponding modes[key]
        calculator.mode = calculator.modes[e.target.dataset.value] 
    }

    if ( e.target.dataset.type === "num" ) {
        //change the value of the white bubble circles every time a number is clicked
        document.getElementById("bottom-white-circle").innerHTML = e.target.dataset.value; 
        document.getElementById("top-white-circle").innerHTML = e.target.dataset.value;     
    } 

    // designate computation operations to corresponding js file
    switch( calculator.mode ) {
        case "Simple":
            simple.simple(e, calculator);
        break;
        
        case "Scientific":
            scientific.scientific(e, calculator) 
        break;

        case "Converter":
            convert.convert(e, calculator);
        break;        

        default:
            simple.simple(e, calculator);
    }
//END EDITS    
};
