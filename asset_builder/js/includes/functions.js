exports.buttons =  (e, calculator, screenNumber) => { //anonymous function in es6 format   
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

};
