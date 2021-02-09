const mongoose = require('mongoose');


const todoTaskSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    image: {
      type: String,
      required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// When you call mongoose.model() on a schema, Mongoose compiles a model for you.
// https://mongoosejs.com/docs/models.html
// exporting it to use in index.js
module.exports = mongoose.model('todotask',todoTaskSchema);
