
// const express = require("express");
// const path = require("path");
// // const fs = require("fs");
// const app = express();
// const port = 80;



// // EXPRESS SPECIFIC STUFF
// app.use('/static', express.static('static')) // For serving static files

// // PUG SPECIFIC STUFF
// app.set('view engine', 'pug') // Set the template engine as pug
// app.set('views', path.join(__dirname, 'views')) // Set the views directory

// // ENDPOINTS
// app.get('/', (req, res) => {

//   res.status(200).render('index.pug');
// })

// // app.post('/', (req, res) => {

// //   console.log(req.body)
// //   // console.log(req.body.name)
// //   console.log(req.phone)
// //   // console.log(req.body)
// // })

// app.post("/", (req, res) => {
//   console.log(req.body);
 
// })


// // START THE SERVER
// app.listen(port, () => {
//   console.log(`The application started successfully on port ${port}`);
// });


// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'jasshugarg0098@gmail.com',
//     pass: 'Yashu@1801'
//   }
// });

// var mailOptions = {
//   from: 'jasshugarg0098@gmail.com',
//   to: 'jasshugarg0098@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });




//-----------------------------------------


const express = require("express");
const path = require("path");
var nodemailer = require('nodemailer');
// const fs = require("fs");
// var mongoose = require("mongoose");
// const { mainModule } = require("process");
// const bodyParser = require("body-parser");
// mongoose.connect("mongodb://localhost/index", { useNewUrlParser: true, useUnifiedTopology: true })
const app = express();
const port = 80;


// const Excel = require('exceljs');
// let workbook = new Excel.Workbook()
// let worksheet = workbook.addWorksheet('Debtors');
// worksheet.columns = [
//     { header: 'Name', key: 'fname' },
//     { header: 'Phone', key: 'mobile' },
//     { header: 'Address', key: 'address' },
//     { header: 'Order', key: 'order' }
// ]


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
// app.use(express.urlencoded())
app.use(express.urlencoded({ extended: true }))

// PUG SPECIFIC STUFF
// app.set('view engine', 'html') // Set the template engine as pug

app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = { 'title': 'PubG is the best game' }
    res.status(200).render('index.pug');
    // res.status(200).render('index.html', params);
})
// count = 0;




app.post("/", (req, res) => {
    console.log(req.body);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jasshugarg0098@gmail.com',
            pass: 'Yashu@1801'
        }
    });

    var mailOptions = {
        from: 'jasshugarg0098@gmail.com',
        to: 'jasshugarg0098@gmail.com',
        subject: req.body.name,
        text: `${req.body.name} \n ${req.body.phone} \n ${req.body.address}\n ${req.body.order}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
})


// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});



