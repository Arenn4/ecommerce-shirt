const mongoose = require('mongoose')

//properties of the shirts to be displayed
//color, description, img, cost, title, size
const shirtSchema = new mongoose.Schema({
    color: {
        type: String,
        required: true,
        lowercase: true,
        enum: ['red', 'blue', 'green', 'purple', 'yellow', 'orange', 'white', 'black', 'grey', 'pink']
    },
    description: String,
    img: String,
    cost: {
        type: Number,
    },
    title: String,
    size: {
        type: String,
        lowercase: true,
        enum: ['small', 'medium', 'large', 'XL', 'XXL']
    }
})

module.exports = mongoose.model('Shirt', shirtSchema)