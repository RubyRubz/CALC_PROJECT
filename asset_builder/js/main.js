//Include JQUERY and BOOTSTRAP
require('../node_modules/jquery/dist/jquery.min.js');
require('../node_modules/bootstrap/dist/js/bootstrap.min.js');

//Include separated files
const animate = require('./includes/animations.js');
const detect  = require('./includes/detect.js');
const keyboard  = require('./includes/keyboard.js');



const calculator = {
  calculate: false,
  numberArray: [],
  numberPlaceholder: ['0', null],
  equals: false, // if true... it will do computations
  mode: 'Simple', //default mode of calculator i.e.
  modes: ['Simple', 'Scientific', 'Converter'], //array of calculator modes (i.e. everytime mode button is clicked it will cycle to the next mode of this array)      
}

/**********************************************
	DETECT BUTTON CLICKS
 **********************************************/
const btn = document.getElementsByClassName('btns')
//loop tru all buttons to detect click
for (i = 0; i < btn.length; i++) {
  //listen for clicks
  btn[i].addEventListener('click', function (event) {
  	//example of calling a function inside asset_builder/js/includes/detect.js
  	detect.click(event, calculator);
    //example of calling a function inside asset_builder/js/includes/animations.js
    animate.blue();
  })
}

/**********************************************
  DETECT KEYBOARD INPUT
 **********************************************/
const key = document.getElementById("calc_screen");
key.addEventListener('keydown', function(event){
  keyboard.type(event, calculator);
  event.preventDefault()
});

/**********************************************
  AUTO FOCUS ON THE SCREEN INPUT
 **********************************************/
window.onload = function() {
  document.getElementById("calc_screen").focus();
}


/**********************************************
  GO BACK TO AUTOFOCUS AFTER CLICKING MOUSE OUTSIDE THE DIV CONTAINER
 **********************************************/
document.addEventListener('click', function(event) {
  if (!document.getElementById('calculator').contains(event.target)) {
    document.getElementById('calc_screen').focus();
  } else if (!document.getElementById('from_drop').contains(event.target) && !document.getElementById('to_drop').contains(event.target)){                           
    document.getElementById('calc_screen').focus();
  } 

});


/**********************************************
  WHEN DROP DOWN IS ACTIVE FOR SELECT OPTION "FROM DROP" & "TO DROP" REMOVE FOCUS SO IT WON'T CLOSE
 **********************************************/
document.querySelector('#from_drop').addEventListener('blur', function() {
  if (document.querySelector('#calc_screen') !== document.activeElement) {
    document.querySelector('#calc_screen').focus();
  }
});
document.querySelector('#to_drop').addEventListener('blur', function() {
  if (document.querySelector('#calc_screen') !== document.activeElement) {
    document.querySelector('#calc_screen').focus();
  }
});
