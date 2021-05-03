const express = require("express");
const path = require("path");
var nodemailer = require('nodemailer');
// const { mainModule } = require("process");
const app = express();

// var port = process.env.PORT || 8080;

// app.use(express.static(__dirname )
app.use('/static', express.static('static')) // For serving static files

// EXPRESS SPECIFIC STUFF
// app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded({ extended: true }))


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
    //     console.log(`The application started successfully on port ${port}`);
    // });
    
    
    
    // app.listen(process.env.PORT);

    // const server = app.listen(process.env.PORT || 5000, () => {
    //     const port = server.address().port;
    //     console.log(`Express is working on port ${port}`);
    //   });

    // app.listen(port, function() {
    //     console.log('Our app is running on http://localhost:' + port);
    // });

    app.listen(process.env.PORT || 3000, function(){
        console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
      });