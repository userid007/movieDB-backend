require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const routes = require('./src/routes');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', routes);
app.use(express.static('dist'))

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    server.listen(PORT, '0.0.0.0', () => { console.log(`Server started on port ${PORT}`); });
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });