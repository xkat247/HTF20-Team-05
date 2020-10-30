const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating LostFound schema
const LostFoundSchema = new Schema({
    type: {
        type: String,
        required: [true, 'Type field is required']
    },
    description: {
        type: String,
        required: [true, 'Description field is required']
    },
    location: {
        type: String,
        required: [true, 'Location field is required']
    },
    image: {
        type: Buffer
    }
}, { timestamps: true });

// LostFound model
const LostFound = mongoose.model('LostFound', LostFoundSchema);

// exporting LostFound model
module.exports = LostFound;