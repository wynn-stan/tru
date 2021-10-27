//configure "valid" endpoints requests can be sent to
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

let port = process.env.PORT;

app.use("/views", express.static(path.join(__dirname, "../views")));
app.use("/data", express.static(path.join(__dirname, "../models/data")));

app.route("/").get((req,res) => {
    //serve landing page html on get
    //serve express static files

    //when you request "/", you should recieve html page
    res.redirect('/views/home/home.html');
    res.end();
});




//Which port should we listen to for requests
//what should we do when we first "connect" to this port
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});





