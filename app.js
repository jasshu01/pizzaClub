const express = require("express");
const path = require("path");
var nodemailer = require('nodemailer');
// const { mainModule } = require("process");
const app = express();
// var port=80;



var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/pizzawebsite", { useNewUrlParser: true, useUnifiedTopology: true })


var DB = `mongodb+srv://jasshugarg:Yashu1801@pizzaclub.4rjeu.mongodb.net/PizzaClub?retryWrites=true&w=majority`
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false

}).then(() => {
    console.log("connection successful");
}).catch((err) = console.log("no connection"));


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

let pageInitial = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table,
        tr,
        td {
            border: 1px solid black;
        }
    </style>
</head>

<body>

    
`;

let detailInital = `   
<br>

<table>
    <thead>
        <tr>

            <td>
                item name
            </td>
            <td>
                qty
            </td>
            <td>
                price
            </td>
            <td>
                total
            </td>           
        </tr>
    </thead>

    <tbody>`

let detailEnd = `        </tbody>
</table>

`;

let pageEnd = `</body>

</html>`

app.get("/owner", (req, res) => {

    var MongoClient = require('mongodb').MongoClient;
    // var url = "mongodb://localhost:27017/";

    MongoClient.connect(DB, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        let s = pageInitial;
        var dbo = db.db("PizzaClub");
        dbo.collection("orders").find({}).toArray(function (err, result) {
            if (err) throw err;

            for (i = 0; i < result.length; i++) {
                s+=` name: ${result[i].name} <br>
                phone: ${result[i].phone} <br>
                address: ${result[i].address} <br>
                ORDER:`;
                s += detailInital;
                // result[i].order.forEach(element => 
                    for(j=0;j<result[i].order.length;j++)
                    {
                    s += `
                <tr>
                
                <td>${result[i].order[j].name}
                </td>
                    <td>
                    ${result[i].order[j].qty}
                    </td>
                    <td>
                    ${result[i].order[j].price}
                    </td>
                    <td>
                    ${parseInt(result[i].order[j].price) * result[i].order[j].qty}
                    </td>
                    </tr>`
                }
                s += detailEnd;
                // );

                s+=`
                <br>
                BILL: ${result[i].order_total} <br>
                Special instruction: ${result[i].instruction} <br>

                `

                s += `<hr>`
            }
            s += pageEnd;
            console.log(result);
            // res.send(result)
            res.send(s)
        });
    });
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is started on 127.0.0.1:' + (process.env.PORT || 3000))
})
