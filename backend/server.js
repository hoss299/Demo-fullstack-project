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
app.use(express.static('Demo-fullstack-project')); //here is a change

const port = 3000;

//spin up to the server
const server = app.listen(port, listening);

// callback function to debug 
function listening (){
    console.log('server is running');
    console.log(`running on localhost: ${port}`);
}

const appData = {name: 'hossam'}; //here is a change
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send(appData);
  }); 
  // make sure of the correct folder structure
  //then run the npm local host
  // this dont work with vs code live server

const data = []; 

function addMovie (req, res)  {
    data.push(req.body);
    console.log(data);
};

// POST method route
app.post('/addMovie', addMovie);

