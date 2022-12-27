//Include JQUERY and BOOTSTRAP
require('../node_modules/jquery/dist/jquery.min.js');
require('../node_modules/bootstrap/dist/js/bootstrap.min.js');

//Include separated files
const animate = require('./includes/animations.js');
const detect  = require('./includes/detect.js');

const calculator = {
  n1: '0', //initial concatenated digits
  n2: '0', //last concatenated digits
  operator: null, //mathematical operations that should be initiated
  equals: false, // if true... it will execute ===> n1 (operator) n2  
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