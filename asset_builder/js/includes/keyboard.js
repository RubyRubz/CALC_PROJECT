exports.type = (event, value) => { //anonymous function in es6 format
  //alert(`I should click the button ${value}`)
  console.log(event);

  document.getElementById("num_" + event.key).click();

};
