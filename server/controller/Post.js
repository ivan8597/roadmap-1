const Post = require("../model/mongo/Post")
const Comment = require("../model/mongo/Comment")
const list = async (req, res, next) => {
    try {
        const { skip = 0, limit = 10 } = req.query
        const userId = req.query.userId
        const criteria = {}
        if (userId) {
            criteria.userId = userId
        }
        res.json({
            count: await Post.countDocuments(criteria),
            items: await Post.find(criteria).skip(parseInt(skip)).limit(parseInt(limit))
        })
    } catch (error) {
        next(error)
    }

}
const getById = async (req, res, next) => {
    try {
        res.json({
            item: await Post.findById( req.params.id )
        })
    } catch (error) {
        next(error)
    }

}
const create = async (req, res, next) => {
    try {
        const post = new Post(req.body)
        await post.save()

        res.json({
            item: post
        })
    } catch (error) {
        next(error)
    }

}
const update = async (req, res, next) => {
    try {
        const data=req.body
        delete data._id
        delete data.userId
        const post=await Post.findByIdAndUpdate(req.params.id, data, {new:true})
       

        res.json({
            item: post
        })
    } catch (error) {
        next(error)
    }

}
const remove = async (req,res, next) => {
    try {
        
        const comments=await Comment.find({postId:req.params.id})
        if(comments.length){
            const error=new Error("Access denied. Need to remove comments")
            error.statusCode="403"
            throw error
        }
        const post=await Post.findByIdAndDelete(req.params.id)
        res.json({
            item: post
        })
    } catch (error) {
        next(error)
    }

}
module.exports = {
    list,
    getById,
    create,
    update,
    remove
}