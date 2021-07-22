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
    instruction: String,
    datetime: Date,
    completed: Boolean,
    orderNo: Number
})

const contactSchema = new mongoose.Schema({
    name: String,
    mail: String,
    subject: String,
    message: String
})

const ownerSchema = new mongoose.Schema({
    username: String,
    password: String
})



const Order = mongoose.model('Orders', orderDetailSchema);
const Contact = mongoose.model('ContactUs', contactSchema);
const Owner = mongoose.model('Owner', ownerSchema);



// app.use(express.static(__dirname )
app.use('/static', express.static('static'))
app.use(express.urlencoded({ extended: true }))



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

orderNo = 0;
app.post("/", (req, res) => {
    if (req.body.order) {
        var myData = new Order(req.body);
        myData.order = JSON.parse(req.body.order);
        myData.orderNo = orderNo + 1;
        orderNo++;
        console.log(myData);

        myData.save()//.then(() => { res.sendFile(path.join(__dirname+'/index.html')) })
            .catch(() => { res.status(400).send("<h1>your Order is not completed , please try again</h1>") })


    }
    if (req.body.subject) {
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
    <link rel="stylesheet" href="../static/css/bootstrap.min.css">
    <title>Document</title>
    <style>

    body{
        margin:15px
    }
        table,
        tr,
        td {
            border: 1px solid black !important;
            text-align:center;
        }
        td{
            padding:1px !important
        }
        .table{
            margin:1px;
            width:60%
        }

        @media screen and (max-width: 1200px) {
            .table{
                width:100%
            }
          }
    </style>
</head>

<body >

    
`;

let detailInital = `   
<br>

<table class="table">
    <thead>
        <tr>

            <td>
                S.no
            </td>
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

let pageEnd = `

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="../static/owner.js"></script>
<script>
//prev=parseInt(-1);

        setTimeout(function()
        {
            window.location.reload();
            //var tables=document.getElementsByClassName("table");
        }, 10000);
                //console.log(tables.length)
                

      </script>
</body>

</html>`

app.post("/login/owner", (req, res) => {
    console.log("deleting")
    console.log(req.body)
    console.log(req.body.OrderCompleteId)

    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect(DB, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("PizzaClub");
        // dbo.collection("orders").deleteOne({ orderNo : req.body.OrderCompleteId }, function (err) {
        dbo.collection("orders").deleteOne({ orderNo : parseInt(req.body.OrderCompleteId) }, function (err) {
            if (err) throw err;
        });
    });
    res.redirect('/login/owner');
    // res.send()
    // res.status(204).send();
})


app.get("/login/owner", (req, res) => {

    var MongoClient = require('mongodb').MongoClient;
    // var url = "mongodb://localhost:27017/";

    MongoClient.connect(DB, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        let s = pageInitial;
        var dbo = db.db("PizzaClub");
        dbo.collection("orders").find({}).toArray(function (err, result) {
            if (err) throw err;

            for (i = 0; i < result.length; i++) {
                s += ` 
                <div id=orderCompleted${result[i].orderNo}>
                
             ${result[i].datetime} <br>
                name: ${result[i].name} <br>
                phone: ${result[i].phone} <br>
                address: ${result[i].address} <br>
                ORDER:`;
                s += detailInital;
                for (j = 0; j < result[i].order.length; j++) {
                    s += `
                <tr>
                
                <td>${j + 1}
                </td> 
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

                s += `
                <br>
                BILL: ${result[i].order_total} <br>
                Special instruction: ${result[i].instruction} <br>

                `

                s += ` 
                
                <form method="POST" action="/login/owner"> 
                <input type="text" name="OrderCompleteId" class="orderID" value="${result[i].orderNo}">
                <button class="btn btn-primary" onClick="window.location.reload()" type="submit">Order Completed</button>
                </form>
                
                <hr> 
                
                </div> `
            }
            s += pageEnd;
            res.send(s)
        });
    });
})



app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname + '/login.html'))
})


app.post('/login', (req, res) => {

    var done = 0;
console.log(req.body)
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect(DB, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("PizzaClub");
        dbo.collection("ownerlogin").find().toArray(function (err, result) {
            if (err) throw err;
            for (i = 0; i < result.length; i++) {
                if (result[i].username === req.body.username) {
                    myUsername = req.body.username;
                    console.log("username matched")
                    if (result[i].password === req.body.password) {
                        console.log("password matched");
                        
                        done = 1;
                        break;

                    }
                }
            }
            if (done == 0) {
                res.send("Cannot login! <br> Incorrect Credentials")
            }
            else{
                res.redirect('/login/owner');
            }


        });
    });

    
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is started on 127.0.0.1:' + (process.env.PORT || 3000))
})


