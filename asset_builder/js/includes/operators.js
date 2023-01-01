exports.operator =  (e, calculator) => { //anonymous function in es6 format   
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
};
