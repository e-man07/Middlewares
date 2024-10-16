const express = require('express');
const app = express();

function middleware(req, res, next) {
    console.log("Method is: " + req.method);
    console.log("URL is: " + req.hostname);
    console.log(new Date());
    next();
}

app.use(middleware);


app.get("/subtract", function(req, res) {

    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a - b
    })

});

app.get("/multiply", function(req, res) {

    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a * b
    })

});

app.listen(3001);
