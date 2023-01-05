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