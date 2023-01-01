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
    
    //hide all buttons
    let allDivs = document.getElementsByClassName(`functions`);
    for (const allDiv of allDivs) {
      allDiv.classList.remove('active');
    }
    
    //show buttons based on the selected mode
    let divs = document.getElementsByClassName(`function_${calculator.mode}`);
    for (const div of divs) {
      div.classList.add('active');
    }
    
    return false;
    break;
    
    case "num":
    // CLEAR FOR NEW COMPUTATION
    if (calculator.calculate == true) {
      calculator.equals            = false;
      calculator.numberArray       = [];
      calculator.numberPlaceholder = [e.target.dataset.value, null];
      screenNumber = '0'
      calculator.calculate = false;
      break;
    }
    
    
    //change the value of the white bubble circles every time a number is clicked
    document.getElementById("bottom-white-circle").innerHTML = e.target.dataset.value; 
    document.getElementById("top-white-circle").innerHTML = e.target.dataset.value;  
    
    
    //stop concatenation if the inputted number already contain "." i.e. prevent 1.1.1.1 ... should be a proper decimal
    if ( calculator.numberPlaceholder[0].includes('.') && e.target.dataset.value === ".") return;
    
    //assign inputted number in their respective calculator object   
    
    calculator.numberPlaceholder[0] = (calculator.numberPlaceholder[0] == 0) ? e.target.dataset.value : calculator.numberPlaceholder[0] + e.target.dataset.value;
    screenNumber = calculator.numberPlaceholder[0];   
    
    
    break;
    
    case "back":
    calculator.numberPlaceholder[0] = (calculator.numberPlaceholder[0].length < 2 || undefined === calculator.numberPlaceholder[0].length) ? '0' : calculator.numberPlaceholder[0].slice(0,-1);        
    screenNumber = calculator.numberPlaceholder[0];                
    break;
    
    case "clear":
    //see main.js ... make sure to clear all calculator object values
    calculator.equals            = false;
    calculator.numberArray       = [];
    calculator.numberPlaceholder = ['0', null];
    screenNumber = '0'
    console.log(calculator);
    break;
    
    case "oper":
    calculator.calculate = false;
    //insert [number, operator] to numberArrays
    
    calculator.numberArray.push([calculator.numberPlaceholder[0], e.target.dataset.value])
    
    
      switch(e.target.dataset.value) {
        case 'plus':
        
        // change dataset value from 'plus' to '+' for the simple.js equal to operate
        
        e.target.dataset.value = '+';
        calculator.numberArray.pop([calculator.numberPlaceholder[0], e.target.dataset.value]);  
        calculator.numberArray.push([calculator.numberPlaceholder[0], e.target.dataset.value]);
        
        
        break;
        case 'minus':
        // change dataset value from 'minus' to '-' for the simple.js equal to operate
        e.target.dataset.value = '-';
        calculator.numberArray.pop([calculator.numberPlaceholder[0], e.target.dataset.value]);
        calculator.numberArray.push([calculator.numberPlaceholder[0], e.target.dataset.value]);
        
        
        break;
        case 'divide':
        // change dataset value from 'divide' to '/' for the simple.js equal to operate
        e.target.dataset.value = '/';
        calculator.numberArray.pop([calculator.numberPlaceholder[0], e.target.dataset.value]);
        calculator.numberArray.push([calculator.numberPlaceholder[0], e.target.dataset.value]);
        
        
        break;
        case 'multiply':
        // change dataset value from 'multiply' to '*' for the simple.js equal to operate
        e.target.dataset.value = '*';
        calculator.numberArray.pop([calculator.numberPlaceholder[0], e.target.dataset.value]);
        calculator.numberArray.push([calculator.numberPlaceholder[0], e.target.dataset.value]); 
        
        
        break;  
        default:
        // code block     
      }
    
    //reset placeholder
    calculator.numberPlaceholder = ['0', null];
    //reset screen to display 0
    // screenNumber = '0'
    console.log(calculator)
    break;
    
    
    case "function":
    
    //insert [number, operator] to numberArrays
    calculator.numberArray.push([calculator.numberPlaceholder[0], e.target.dataset.value])
    
      switch(e.target.dataset.value) {
        case 'reciprocal':
        
        calculator.numberPlaceholder = 1/(calculator.numberPlaceholder[0]);
        screenNumber = calculator.numberPlaceholder
        console.log(screenNumber)
        calculator.numberArray.pop([calculator.numberPlaceholder[0], e.target.dataset.value])
        
        break;
        
        case 'square':
        calculator.numberPlaceholder = calculator.numberPlaceholder[0] ** 2;
        
        screenNumber = calculator.numberPlaceholder
        console.log(screenNumber)
        
        calculator.numberArray.pop([calculator.numberPlaceholder[0], e.target.dataset.value])
        
        break;
        case 'squareRoot':
        calculator.numberPlaceholder = Math.sqrt(calculator.numberPlaceholder[0])
        screenNumber = calculator.numberPlaceholder
        console.log(screenNumber)
        
        calculator.numberArray.pop([calculator.numberPlaceholder[0], e.target.dataset.value])
        
        break;
        
        default:
        // code block     
      }  
    
    //reset placeholder
    calculator.numberPlaceholder = [screenNumber, null];
    //RESULT OF FUNCTION
    // screenNumber = calculator.numberPlaceholder
    console.log(calculator)
    break;
    
    
    case "equals":
    //insert [number, null] to numberArrays
    calculator.numberArray.push([calculator.numberPlaceholder[0]]);
    //set equals to true to let simple/scientific/convert.js know that it should start computing
    calculator.equals = true
    calculator.calculate = true
    // designate computation operations to corresponding js file
      switch( calculator.mode ) {
        case "Simple":
        screenNumber = simple.simple(e, calculator);
        break;
        
        case "Scientific":
        screenNumber = scientific.scientific(e, calculator) 
        break;
        
        case "Converter":
        screenNumber = convert.convert(e, calculator);
        break;        
        
        default:
        screenNumber = simple.simple(e, calculator);
      } 
    break;
    
    default:
    // code block
  }
  
  //show calculator object on debug screen
  document.getElementById("debugScreen").innerHTML = JSON.stringify(calculator);    
  
  //show number on calculator screen  
  document.getElementById("calc_screen").value = screenNumber;          
  //END EDITS    
};
