exports.function =  (e, calculator, screenNumber) => { //anonymous function in es6 format   
      switch(e.target.dataset.value) {
        case 'reciprocal':       
        calculator.numberPlaceholder = 1/(calculator.numberPlaceholder[0]);
        screenNumber = String(calculator.numberPlaceholder)
        console.log(screenNumber)
        calculator.numberArray.pop([calculator.numberPlaceholder[0], e.target.dataset.value])        
        break;
        
        case 'square':
        calculator.numberPlaceholder = calculator.numberPlaceholder[0] ** 2;
        
        screenNumber =  String(calculator.numberPlaceholder)
        console.log(screenNumber)
        
        calculator.numberArray.pop([calculator.numberPlaceholder[0], e.target.dataset.value])        
        break;

        case 'squareRoot':
        calculator.numberPlaceholder = Math.sqrt(calculator.numberPlaceholder[0])
        screenNumber =  String(calculator.numberPlaceholder)
        console.log(screenNumber)
        
        calculator.numberArray.pop([calculator.numberPlaceholder[0], e.target.dataset.value])        
        break;

        case 'cos':
        calculator.numberPlaceholder = Math.cos(calculator.numberPlaceholder[0])
        screenNumber =  String(calculator.numberPlaceholder)
        console.log(screenNumber)
        
        calculator.numberArray.pop([calculator.numberPlaceholder[0], e.target.dataset.value])        
        break;

        case 'sin':
        calculator.numberPlaceholder = Math.sin(calculator.numberPlaceholder[0])
        screenNumber =  String(calculator.numberPlaceholder)
        console.log(screenNumber)
        
        calculator.numberArray.pop([calculator.numberPlaceholder[0], e.target.dataset.value])        
        break;

        case 'tan':
        calculator.numberPlaceholder = Math.tan(calculator.numberPlaceholder[0])
        screenNumber =  String(calculator.numberPlaceholder)
        console.log(screenNumber)
        
        calculator.numberArray.pop([calculator.numberPlaceholder[0], e.target.dataset.value])        
        break;
        
        default:
        // code block     
      }  
      
      return screenNumber;
};
