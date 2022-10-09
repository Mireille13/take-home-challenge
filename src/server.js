//require express to build the server
const express = require('express');
//app is server
const app = express();
const eventRoute = express.Router();
const eventController = require('../controller/eventController.js');

//parse data for express to handle
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//when user clicks on a city, this re-routes user to that city's events
eventRoute.get('/', eventController.getEvents, (req, res) => {
    return res.status(200).json(res.locals.events);
});

//when user clicks on a certain event w/in that city's events, they are redirected to that event's details
eventRoute.get('/eventId', eventController.chosenEvent, (req, res) => {
    return res.status(200).json(res.locals.selectedEvent);
})


//Catch all error handler for unknown routes
app.use((req, res) => {
    return res.status(404).send('This endpoint does not exist');
  });
    
  //Global error handler
  app.use((err, req, res, next) => {
    //Set the default error
    const defaultError = {
      status: 400,
      log: 'Global Error handler activated',
      message: 'Error, page not found',
    };
      //Overwrite the default error with the incoming error
    const finalError = Object.assign({}, defaultError, err);
    
    //Log the error in the server and send back the error message
    console.log(finalError.log);
    return res.end();
  });