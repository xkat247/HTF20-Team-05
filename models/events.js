const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating event schema
const EventSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    description: {
        type: String,
        required: [true, 'Description field is required']
    },
    date: {
        type: Date,
        required: [true, 'Date field is required']
    },
    image: {
        type: Buffer
    }
});

// event model
const Event = mongoose.model('event', EventSchema);

// exporting event model
module.exports = Event;