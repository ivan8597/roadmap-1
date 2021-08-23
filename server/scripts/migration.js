const path = require('path')
require('dotenv').config({
    path: path.join(__dirname, '../.env')
})
const mongoose = require("mongoose");
require('../model/mongo/db')
const User = require("../model/mongo/User")
const Post = require("../model/mongo/Post");
const Comment = require("../model/mongo/Comment");

const start = async () => {
    const posts = await Post.find();
    for (let post of posts) {
        const comments = await Comment.find({
            postId: post.id
        });
        if (comments.length) {
            for (let comment of comments) {
                comment.postId = new mongoose.Types.ObjectId(post._id);
                await comment.save();
            }
        } else {
            console.log("no comments");
        }
    }
    const users = await User.find();
    for (let user of users) {
        const posts = await Post.find({
            userId: user.id
        });
        if (posts.length) {
            for (let post of posts) {
                post.userId = new mongoose.Types.ObjectId(user._id);
                await post.save();
            }
        } else {
            console.log("no posts");
        }
    }

    process.exit();
}

start();
