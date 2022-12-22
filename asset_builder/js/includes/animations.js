exports.blue =  () => { //anonymous function in es6 format
  //add shouldAnimateClass to trigger glowing effect
  document.getElementById("blue_row").classList.remove("shouldAnimateClass");  

  
  setTimeout( function () {
    document.getElementById("blue_row").classList.add("shouldAnimateClass"); 
  }, 300);

};
