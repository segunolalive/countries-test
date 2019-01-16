const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);


app.use(function(req, res, next) {
  res.status(404).send({ message: "Four Oh Four" });
});

app.use((err, req, res, _) => {
  res.send({ error: { message: err.message } });
});

module.exports = app;
