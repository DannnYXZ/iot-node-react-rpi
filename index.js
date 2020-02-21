const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/modules', (req, res) => {
  var list = ["module-temp", "module-humi", "module-press"];
  res.json(list);
  console.log('Sent list of modules');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);