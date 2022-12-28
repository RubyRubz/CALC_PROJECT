//Include separated files
const simple = require('./simple.js');
const scientific  = require('./scientific.js');
const convert  = require('./convert.js');

exports.click =  (e, calculator) => { //anonymous function in es6 format
//START EDITS  

    let screenNumber = 0;

    switch(e.target.dataset.type) {
      case "mode":
        let modeIndex = e.target.dataset.value; 
        //cycle thru array of calculator.modes        
        let modeValue = (modeIndex + 1) % (calculator.modes.length); 
        e.target.dataset.value = modeValue      
        //assign mode to corresponding modes[key]
        calculator.mode = calculator.modes[e.target.dataset.value] 
         //show mode on calculator screen 
        document.getElementById("mode_screen").innerHTML = `Mode: ${ calculator.mode }`;
        break;

      case "num":
        //change the value of the white bubble circles every time a number is clicked
        document.getElementById("bottom-white-circle").innerHTML = e.target.dataset.value; 
        document.getElementById("top-white-circle").innerHTML = e.target.dataset.value;  

        //assign inputted number in their respective calculator object   
        // if (!calculator.operator) {        
        //     calculator.n1 = (calculator.n1 == 0) ? e.target.dataset.value : calculator.n1 + e.target.dataset.value  
        //     screenNumber = calculator.n1      
        // } else {
        //     calculator.n2 = (calculator.n2 == 0) ? e.target.dataset.value : calculator.n2 + e.target.dataset.value        
        //     screenNumber = calculator.n2
        // }

        //this is the simplified version of the commented codes above
        let currentNumber = (!calculator.operator) ? 'n1' : 'n2';    

        //stop concatenation if the inputted number already contain "." i.e. prevent 1.1.1.1 ... should be a proper decimal
        if ( calculator[currentNumber].includes('.') && e.target.dataset.value === ".") return;

        calculator[currentNumber] = (calculator[currentNumber] == 0) ? e.target.dataset.value : calculator[currentNumber] + e.target.dataset.value;
        screenNumber = calculator[currentNumber];
        break;

      case "back":
        // if (!calculator.operator) {        
        //     calculator.n1 = (calculator.n1.length < 2 ) ? 0 : calculator.n1.slice(0,-1);        
        //     screenNumber = calculator.n1
        // }  else {
        //     calculator.n2 = (calculator.n2.length < 2 ) ? 0 : calculator.n2.slice(0,-1);        
        //     screenNumber = calculator.n2
        // }

        //this is the simplified version of the commented codes above
        let currentNumberToErase = (!calculator.operator) ? 'n1' : 'n2';        
        calculator[currentNumberToErase] = (calculator[currentNumberToErase].length < 2 ) ? 0 : calculator[currentNumberToErase].slice(0,-1);        
        screenNumber = calculator[currentNumberToErase];                
        break;

      case "clear":
        calculator.n1       = '0' 
        calculator.n2       = '0'
        calculator.operator = null
        calculator.equals   = false
        screenNumber        = '0'
        break;

      case "oper":
        calculator.operator = e.target.dataset.value
        screenNumber = 0
        break;

      case "equals":
        calculator.equals = true
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
        break;

      default:
        // code block
    }

    //show number on calculator screen  
    document.getElementById("calc_screen").value = screenNumber;          
//END EDITS    
};
