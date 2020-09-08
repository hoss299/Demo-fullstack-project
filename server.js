/*
In the project main file, open the terminal(Git bash here),
1- npm init -->this create a package.json file
    dont forget to write the js file name in questionaire steps
2- npm install express
3- npm install body-parser
4- npm install cors
*/

// use Express to run server and routes
const express = require('express');

//start up an instance of app
const app = express();

// Dependencies
const bodyParser = require('body-parser');

//Middleware
//Here we are configuring express to use body-parser as a middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// initialize the main project folder (frontend)
app.use(express.static('website')); //here is a change

const port =  4300; //process.env.port ||

//spin up to the server
 const server = app.listen(port, listening);

// callback function to debug 
function listening (){
    console.log('server is running');
    console.log(`running on localhost: ${port}`);
}

// const appData = {name: 'hossam'}; //here is a change
// respond with "hello world" when a GET request is made to the homepage
app.get('/best', function (req, res) {
    res.send("hello zoko");
  }); 
  // make sure of the correct folder structure
  //then run the npm local host
  // this dont work with vs code live server

const data = []; 

// POST method route
app.post('/addMovie', function addMovie (req, res)  {
  data.push(req.body);
  console.log(data);
});


// Dummy API Enpoint
const fakeData = {
  animal: 'lion',
  fact: 'lions are fun'
};

app.get('/animalData', getFakeData);

function getFakeData (req, res) {
  res.send(fakeData);
};

const animalData = [];

app.get('/all', getData);

function getData (req, res) {
  res.send(animalData);
  console.log(animalData);
};

// POST ROUTE

app.post('/addAnimal', addAnimal);

function addAnimal (req, res) {
  newEntry = {
    animal: req.body.animal,
    facts: req.body.fact,
    fav: req.body.fav
  }

  animalData.push(newEntry)
  res.send(animalData)
  console.log(animalData)
}