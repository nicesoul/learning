const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
    },
    inStock: {
        type: Boolean
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', itemSchema);