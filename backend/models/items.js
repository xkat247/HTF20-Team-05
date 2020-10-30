const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating item schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    description: {
        type: String,
        required: [true, 'Description field is required']
    },
    price: {
        type: Number,
        required: [true, 'Price field is required']
    },
    image: {
        type: Buffer
    }
}, { timestamps: true });

// item model
const Item = mongoose.model('Item', ItemSchema);

// exporting item model
module.exports = Item;