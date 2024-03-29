const mongoose = require('mongoose');

const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require('dotenv').config();

const port = process.env.PORT || 3000;

URI = "mongodb+srv://cruzcejaa:data@cluster0.ehfotai.mongodb.net/Winter24"

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('Connected to MongoDB');
  // Start your Express server once connected to MongoDB
  app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
  });
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Create a Schema object

// Create a Model object

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/form.html")
});

app.post('/', async (req, res) => {
  // get the data from the form

  // connect to the database and log the connection

  // add the data to the database

  // send a response to the user
  res.send(`<h1>Document  Added</h1>`);
});


