const express = require("express");
const mongoose = require("mongoose");
/* removed due to conflict with back4app
const app = express();
const port = 8081;
*/
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.set('strictQuery', true);

mongoose.connect(
  //used environment variables to secure mongodb user/pass		
  `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.dq6vkwl.mongodb.net/calculator?retryWrites=true&w=majority`, 
    {    
        useNewUrlParser : true,
        useUnifiedTopology : true
  }
) // added catch due to error in back4app
.catch ( error => {
  console.log(error);
});

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.on('open', () => console.log("Connected to MongoDB!"));

const convertSchema = new mongoose.Schema({ 
    type : String,
    unit : String,
    data : Object,
});

const Convert = mongoose.model("Convert", convertSchema);

/* removed to prevent adding of data via browser
app.post('/add-data', (req, res) => {
    Convert.findOne({type : req.body.type, unit: req.body.unit}, (err, result) => {
        if(result != null && result.type == req.body.type){
            return res.send("Already in the Database!");
        } else {
            let newConvert = new Convert({
                type : req.body.type,
                unit : req.body.unit,
                data : req.body.data
            });

            newConvert.save((saveErr, savedConvert) => {
                if(saveErr){
                    return console.error(saveErr);
                } else {
                    return res.status(201).send(Successfully Saved ${req.body.unit}!);
                }
            })
        }
    })
});
*/

app.get("/convert/:type/:unit", (req, res) => {
    Convert.findOne({type : req.params.type, unit: req.params.unit}, (err, result) => {
        if (err) {
            return console.log(err);
        } else {
            return res.status(200).json({
                data : result            
            })
        }
    })
});

/* removed due to conflict with back4app
app.listen(port, () => console.log(Server running at port ${port}!))
*/