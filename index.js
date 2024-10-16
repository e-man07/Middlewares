const express = require('express');
const app = express();

let reqCount = 0;

function requestIncreaser(req, res, next) {
    reqCount = reqCount + 1;
    console.log("Total no of request count:  " + reqCount);
    next();
    

}

function realSumHandler(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        ans: a + b
    })

}
app.get("/sum/:a/:b", requestIncreaser, realSumHandler);

app.get("/subtract", function(req, res) {

    requestIncreaser(req, res);

    const a = parseInt(req.query.a);
    const b = parseint(req.query.b);

    res.json({
        ans: a - b
    })

});

app.get("/multiply", function(req, res) {

    requestIncreaser(req, res);

    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a * b
    })

});

app.get("/divide", function(req, res) {

    requestIncreaser(req, res);

    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a / b
    })

})

app.listen(3000);