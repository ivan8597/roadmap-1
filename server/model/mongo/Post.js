const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    fileId: {
        type: Schema.Types.ObjectId,
      },
    body:
    {
        type: String,
        required: true
    },
});

const model = mongoose.model('Post', PostSchema, 'posts');

module.exports = model;