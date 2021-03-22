const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    userId: Number,
    id: Number,
    title: String,
    body: String
});

const model = mongoose.model('Post', PostSchema, 'posts');

module.exports = model;