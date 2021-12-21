const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    path: {
        type: String,
        required: true
    },
}, {timestamps:true});

const model = mongoose.model('File', FileSchema, 'files');

module.exports = model;
