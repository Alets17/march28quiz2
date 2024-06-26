const mongoose = require('mongoose');

const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require('dotenv').config();

const port = process.env.PORT || 3000;




// Create a Schema object

// Create a Model object

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/form.html")
});

app.post('/', async (req, res) => {
  // get the data from the form
  uri = req.body.myuri
  console.log(uri)
  // connect to the database and log the connection
  mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your Express server once connected to MongoDB
    
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  // add the data to the database
  const name = "Alejandro Cruz Ceja 2"
  const studentID = 300353501

  const newW24students = new w24students({
    name,
    studentID
  })

  newW24students
    .save()
    .then(() => res.json("Student Added!"))
    .catch((err) => res.status(400).json("Error:" +err))
  // send a response to the user
  res.send(`<h1>Document  Added</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
