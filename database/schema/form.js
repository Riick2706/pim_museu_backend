const mongoose = require("mongoose")

// Declare the Schema of the Mongo model
const formResponseSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        index: true,
    },
    response: {
        type: Array,
        required: true,
        unique: false
    },
    formName: {
        type: String,
        enum: ['santos_dumont', 'arte_moderna', 'videogames', 'olimpiadas']
    }
});

const formResponseModel = mongoose.model('formResponse', formResponseSchema)

module.exports = formResponseModel