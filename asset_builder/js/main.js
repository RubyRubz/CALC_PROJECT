//Include JQUERY and BOOTSTRAP
require('../node_modules/jquery/dist/jquery.min.js');
require('../node_modules/bootstrap/dist/js/bootstrap.min.js');

const animate = require('./includes/animations.js');
const detect  = require('./includes/detect.js');

console.log('main.js works!  :: main.js');

/**********************************************
	ANIMATIONS
 **********************************************/
//example of calling a function inside asset_builder/js/includes/animations.js
animate.someDiv();


/**********************************************
	DETECT BUTTON CLICKS
 **********************************************/
const btn = document.getElementsByClassName('btns')
//loop tru all buttons to detect click
for (i = 0; i < btn.length; i++) {
  //listen for clicks
  btn[i].addEventListener('click', function (event) {
  	//example of calling a function inside asset_builder/js/includes/detect.js
  	detect.click(event)
  })
}