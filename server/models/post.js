const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const postSchema = new mongoose.Schema({
    title: { type: String, unique: true },
    description: String,
    email: { type: String, default: 'Email Not Found', },
    link: { type: String, unique: true },
    date: Date,
    saved: { type: Boolean, default: false},
});

postSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

postSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Post', postSchema);