const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventName: {
        type: String
    },
    eventDate: {
        type: Date
    },
    eventDescription: {
        type: String
    }
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;