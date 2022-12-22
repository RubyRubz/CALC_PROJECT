exports.scientific =  (e, calculator) => { //anonymous function in es6 format
//START EDITS    
    document.getElementById("mode_screen").innerHTML = "Mode: Scientific"; //show mode on calculator screen 
    document.getElementById("calc_screen").value = `${e.target.dataset.value}`; //show number on calculator screen  
    console.log(`xxx button with value: ${e.target.dataset.value} was just clicked. its type is ${e.target.dataset.type}  :: scientific.js`)
//END EDITS    
};