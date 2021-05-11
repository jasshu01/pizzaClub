const express = require("express");
const path = require("path");
var nodemailer = require('nodemailer');
// const { mainModule } = require("process");
const app = express();
// var port=80;
// var port = process.env.PORT || 8080;

// app.use(express.static(__dirname )
app.use('/static', express.static('static')) // For serving static files

// EXPRESS SPECIFIC STUFF
// app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded({ extended: true }))


app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+'/static/EDIT_1.html'))
})


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
        subject:`${req.body.name}` ,
        // text: `${req.body.order}`
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


// // START THE SERVER
// app.listen(port, () => {
//         console.log(`The application started successfully on port ${port}`);
//     });
    
    
    app.listen(process.env.PORT || 3000, () => {
        console.log('Server is started on 127.0.0.1:'+ (process.env.PORT || 3000))
    })
