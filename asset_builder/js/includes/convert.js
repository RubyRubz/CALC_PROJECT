exports.convert =  (e, calculator) => { //anonymous function in es6 format
    let result = 0;

    //check if equals button was clicked
    if(calculator.equals) {
        //START EDITS    
        console.log('Convert.js do calculations for', calculator.numberArray);


        //this is the value that will be on the calculator screen
        result = "Convert result";
        //END EDITS            
    }

    //see main.js ... make sure to clear all calculator object values
    calculator.equals            = false;
    calculator.numberArray       = [];
    calculator.numberPlaceholder = ['0', null];
    console.log('Simple.js cleared calculator object', calculator);

    return result;   
};