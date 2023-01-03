exports.type = (event, value) => { //anonymous function in es6 format
  //this will find element in index.html that has an id="num_XXX" base on the event.key
  
  document.getElementById("num_" + event.key).click();
  event.preventDefault();
};
