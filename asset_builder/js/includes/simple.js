exports.simple =  (e, calculator) => { //anonymous function in es6 format
    let result = 0;

    //check if equals button was clicked
    if(calculator.equals) {
        //START EDITS    

        console.log('Simple.js do calculations for', calculator.numberArray);
        const finalResult = [].concat(...calculator.numberArray);
        let computeResult = finalResult.join(' ');
        console.log(computeResult)
        console.log(eval(computeResult));

        //this is the value that will be on the calculator screen
        result = eval(computeResult);
        //END EDITS            
    }

    //see main.js ... make sure to clear all calculator object values
    calculator.equals            = false;
    calculator.numberArray       = [result];
    //calculator.numberPlaceholder = ['', null];
    console.log('Simple.js cleared calculator object', calculator);

    return result;
 };
