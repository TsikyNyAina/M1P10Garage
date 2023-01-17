// const path = require('path');
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const router = require(path.join(__dirname, 'controller', 'client.Controller'));
// const routerVoiture = require(path.join(__dirname, 'controller', 'voiture.Controller'));

// const app = express();

// // Parse incoming requests data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/clients', router);
// app.use('/voitures', routerVoiture);

// // Configure Mongoose
// mongoose.connect('mongodb+srv://vaika:vaika@vaika.pzzbpw6.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected to MongoDB');
// });

// const port = process.env.PORT || 3000;

// app.listen(port, function() {
//   console.log(`Server running on port ${port}`);
// });


import express,{ Express } from "express"; 
import * as controller from "./controller";
import swaggerUi from "swagger-ui-express"; //swagger
import swaggerJson from "./strict/swagger.json"//swagger json



const app = express();

//aza mapiasa body parser...fa express

app.use(express.json());
app.use(express.urlencoded({ extended: false }));




//mgenere fichier misfonction bdb le cli ex 
import * as rest from "./strict/rest"
for(let v of Object.values(rest))v()



for(let c of Object.values(controller) )
  new c().rest(app)
app.use('/documentation',swaggerUi.serve, swaggerUi.setup(swaggerJson,{ explorer: true }))



const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Server running on port ${port}`);
});
