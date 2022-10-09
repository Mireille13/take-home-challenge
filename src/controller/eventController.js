const mongoose = require('mongoose');
const Event = require('../model/eventModel.js');

const eventController = {};

eventController.getEvents = (req, res, next) => {
    try{
        const eventsInSelectedCity = req.params.cityEvents
        Event.find(eventsInSelectedCity);
        res.locals.events = eventsInSelectedCity;
        return next;
    } catch (err){
        return next({
            message:'Unable to retrieve events'
        });
    }
};

eventController.chosenEvent = (req, res, next) => {
    try{
        const selectedEvent = req.params.eventName;
        Event.findById(selectedEvent);
        res.locals.selectedEvent = selectedEvent;
        return next;
    } catch (err){
        return next({
            message: 'Unable to retrieve selected event'
        });
    }
};



// eventController.getCity = (req, res, next) => {
//     Event.find({}, (err, cityList) => {
//         if(err){
//             return next({
//                 message: 'Error in retrieving city'
//             })
//         }
//         res.locals.cityList = cityList;
//         return next;
//     })
// }
export default eventCrontroller;