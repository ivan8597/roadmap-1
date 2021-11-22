const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    postId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    
    name: {
        type: String,
        required: true
    },
    email: { type: String, required: true },
    body: { type: String, required: true }
});

const model = mongoose.model('Comment', CommentSchema, 'comments');

module.exports = model;