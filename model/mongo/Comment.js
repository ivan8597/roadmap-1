const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    postId: Number,
    id: Number,
    name: String,
    email:String,
    body: String,
});

const model = mongoose.model('Comment', CommentSchema, 'comments');

module.exports = model;