const express = require("express");
const path = require("path");
var nodemailer = require('nodemailer');
// const { mainModule } = require("process");
const app = express();
// var port=80;



var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/pizzawebsite", { useNewUrlParser: true, useUnifiedTopology: true })


const orderDetailSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: Number,
    order: Object,
    order_total: String
})



const Order = mongoose.model('Orders', orderDetailSchema);



// app.use(express.static(__dirname )
app.use('/static', express.static('static'))
app.use(express.urlencoded({ extended: true }))




app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.post("/", (req, res) => {

    var myData = new Order(req.body);
    myData.order = JSON.parse(req.body.order);
    console.log(myData);

    myData.save()//.then(() => { res.sendFile(path.join(__dirname+'/index.html')) })
        .catch(() => { res.status(400).send("item was not saved to the databse") })
})



app.listen(process.env.PORT || 3000, () => {
    console.log('Server is started on 127.0.0.1:' + (process.env.PORT || 3000))
})