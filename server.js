const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/devices', (req, res) => {
    let devices =
        [
            {
                on: false,
                device: "BME280",
                id: 87136823,
                title: "Home Weather Station"
            },
            {
                on: true,
                device: "T-SWITCH",
                id: 928739283,
                title: "Light"
            },
            {
                on: false,
                device: "T-SWITCH",
                id: 218736919,
                title: "Water"
            },
            {
                on: false,
                device: "Temperature",
                id: 43209880283
            }
        ];
    res.json(devices);
    console.log('Sent list of modules');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);