const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId, Date } = Schema.Types;

const reviewSchema = new Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    comicId: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true,
    }
    // Add star rating?
});

module.exports = new Model('Review', reviewSchema);