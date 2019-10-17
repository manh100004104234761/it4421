const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./routes/middlewares/jwt');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/', require('./routes/index'));


app.get('/', (req, res) => {
    res.json({
        status: "OK"
    })
})
app.listen(3003, () => {
    console.log('server is running')
})