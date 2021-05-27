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
    order_total: String,
    instruction: String
})

const contactSchema = new mongoose.Schema({
    name: String,
    mail: String,
    subject: String,
    message: String
})



const Order = mongoose.model('Orders', orderDetailSchema);
const Contact = mongoose.model('ContactUs', contactSchema);



// app.use(express.static(__dirname )
app.use('/static', express.static('static'))
app.use(express.urlencoded({ extended: true }))




app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.post("/", (req, res) => {
    if (req.body.order) {
        var myData = new Order(req.body);
        myData.order = JSON.parse(req.body.order);
        console.log(myData);

        myData.save()//.then(() => { res.sendFile(path.join(__dirname+'/index.html')) })
            .catch(() => { res.status(400).send("<h1>your Order is not completed , please try again</h1>") })


    }
    else {
        var myData = new Contact(req.body);
        console.log(myData);

        myData.save().then(() => { res.sendFile(path.join(__dirname + '/index.html')) })
            .catch(() => { res.status(400).send("<h1>your request is not completed , please try again</h1>") })
    }
})


app.listen(process.env.PORT || 3000, () => {
    console.log('Server is started on 127.0.0.1:' + (process.env.PORT || 3000))
})