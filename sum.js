const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


app.post("/sum", function(req, res) {
    console.log(req.body);

    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    });
});

app.listen(3001, () => {
    console.log("Port is running on 3001")
});
