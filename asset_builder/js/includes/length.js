exports.length =  (e, calculator) => { //anonymous function in es6 format
    //check if equals button was clicked
    if(calculator.equals) {
        //START EDITS    
        let result = ""
        //get value of From/To from the selected currency dropdown
        let from = document.getElementById("from_length").value;
        let to = document.getElementById("to_length").value;

        if (from === "" || to === "") {
          alert('ERROR: Please select From/To Length');
          return;
        }

        const xhttp = new XMLHttpRequest();
        //source of conversion data where express.js was uploaded
        xhttp.open("GET", `https://batch225-calculator.b4a.app/convert/length/${from}`, true);
        //get data
        xhttp.send();

        xhttp.onreadystatechange = function() {
          //if successful in getting data
          if (this.readyState == 4 && this.status == 200) {
          	
            //string to object conversion
            let httpResult = JSON.parse(xhttp.responseText)
            //multiply the equivalent length based on user's input
            result = httpResult.data.data[to] * Number(calculator.numberPlaceholder[0]);
            //display on the screen
            document.getElementById("calc_screen").value = String(result).slice(0,13);

            //see main.js ... make sure to clear all calculator object values
            calculator.calculate         = false;
            calculator.equals            = false;
            calculator.numberArray       = [];
            calculator.numberPlaceholder = ['0', null];  

          } else {
            //display loading message on screen
            document.getElementById("calc_screen").value = 'Please wait...';
          }
        };

        //If error occurs
        xhttp.onerror = function() {
          //display error message on screen
          document.getElementById("calc_screen").value = 'API Error';
        };
        // //END EDITS            
    }
};