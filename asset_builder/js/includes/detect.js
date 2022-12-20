const simple = require('./simple.js');
const scientific  = require('./scientific.js');
const convert  = require('./convert.js');

exports.click =  (e) => { //anonymous function in es6 format
//START EDITS    
    let mode = null // initial mode of calculator
    let modeIndex = e.target.dataset.value;
    const modes = ['Simple', 'Scientific', 'Converter']; //array of modes    


    if ( e.target.dataset.type === "mode") {  
        console.log(`Calculator mode is ${modes[modeIndex]} :: detect.js`)  
        e.target.dataset.value = (modeIndex + 1) % (modes.length); //cycle thru array of modes                
        mode = modes[e.target.dataset.value] //assign mode to corresponding modes[key]
    }

    console.log(modes[e.target.dataset.value])

    // designate computation operations to corresponding js file
    switch(mode) {
        case "Simple":
            simple.simple(e);
        break;
        
        case "Scientific":
            scientific.scientific(e) 
        break;

        case "Converter":
            convert.convert(e);
        break;        

        default:
            simple.simple(e);
    }  


    console.log(`MODE: ${mode}:: button with value: ${e.target.dataset.value} was just clicked. its type is ${e.target.dataset.type}  :: detect.js`)
//END EDITS    
};
