//require mongoose for database
const mongoose = require('mongoose');
//creating mongoose schema
const { Schema } = mongoose;
//provided fake events mongo URL 
const myURI = 'mongodb+srv://sailboat:B7d6u2VxlFDZlZ5Y@posh-challenges.qb5s8.mongodb.net/explore?retryWrites=true&w=majority';
const URI = process.env.MONGO_URI || myURI;

const eventModel = new Schema({
    eventName: String,
	eventFlyer: String,
	eventCity: String,
	groupAvi: String,
	timezone: String,
	startUtc: Date,
	endUtc: Date,
	url: String,
	venueName: String,
	groupName: String,
});

module.exports = mongoose.model('Event', eventModel); 


