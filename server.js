const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require(path.join(__dirname, 'controller', 'client.Controller'));
const routerVoiture = require(path.join(__dirname, 'controller', 'voiture.Controller'));

const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/clients', router);
app.use('/voitures', routerVoiture);

// Configure Mongoose
mongoose.connect('mongodb+srv://vaika:vaika@vaika.pzzbpw6.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Server running on port ${port}`);
});
