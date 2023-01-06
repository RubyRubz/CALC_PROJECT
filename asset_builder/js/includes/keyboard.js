exports.type = (e, value) => { //anonymous function in es6 format
  //this will find element in index.html that has an id="num_XXX" base on the event.key

    let button = document.getElementById("num_" + e.key);
    if(button) {
      document.getElementById("calc_screen").focus()
      // if button with id num_xxx is found click it
      button.click();
    } else {
      // do nothing if button can't be found
      
      e.stopPropagation()
    }

  
  
  
};
