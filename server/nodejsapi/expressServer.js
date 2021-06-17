// DEPENDENCIES
const fs = require('fs');
const express = require('express');
const app = express();
const port = `5001`;
const bodyParser = require('body-parser')


app.use(bodyParser.json())

app.post('/', function (req, res) {
    var body = req.body
    const filePath = './test.ics'

    fs.writeFile(filePath, body, function (error) {
        if (error) {
            console.log('There was an error while writing the .ics file.')
            console.log(error)
        }
        res.status(200).json({
            message: "The .ics file has bee successfully written"
        })
    })

})

// HTTP SERVER
app.listen(port, () => console.log(`> running express server on port: ${port}`));