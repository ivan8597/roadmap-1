const Post = require("../model/mongo/Post")
const Comment = require("../model/mongo/Comment")
const File = require("../model/mongo/File")
const list = async (req, res, next) => {
    try {
        const { skip = 0, limit = 10 } = req.query
        const userId = req.query.userId
        const criteria = {}
        if (userId) {
            criteria.userId = userId
        }
        const posts= await Post.find(criteria).skip(parseInt(skip)).limit(parseInt(limit)).sort({ _id: -1})
        const fileIds=[]
        for(let post of posts){
            if(post.fileId){
                fileIds.push(post.fileId)
            }
        }
        const files=await File.find({_id:{$in:fileIds}})
        res.json({
            count: await Post.countDocuments(criteria),
            items: posts,
            files:files

        })
    } catch (error) {
        next(error)
    }

}
const getById = async (req, res, next) => {
    try {
        const post=await Post.findById( req.params.id )
        let image=null

        if(post.fileId){
            image=await File.findById(post.fileId)
        }
       res.json({
           item: post,
           image:image
       })
    } catch (error) {
        next(error)
    }

}
const create = async (req, res, next) => {
    try {
        const post = new Post({...req.body,userId:req.userId })
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
        const post=await Post.findOneAndUpdate({_id:req.params.id,userId:req.userId}, data, {new:true})
       
         let image=null

         if(post.fileId){
             image=await File.findById(post.fileId)
         }
        res.json({
            item: post,
            image:image
        })
    } catch (error) {
        next(error)
    }

}
const remove = async (req,res, next) => {
    try {
        const prevPost=await Post.findOne({     
            _id:req.params.id, userId:req.userId
        })
        if(!prevPost){
            return res.json({item:null })
        }
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