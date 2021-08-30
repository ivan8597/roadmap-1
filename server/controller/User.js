const User = require('../model/mongo/User')
const Post = require('../model/mongo/Post')
const list = async (req, res, next) => {
    try {
        const { skip = 0, limit = 10 } = req.query
        res.json({
            count: await User.countDocuments(),
            items: await User.find().skip(parseInt(skip)).limit(parseInt(limit))
        })
    } catch (error) {
        next(error)
    }

}
const getById = async (req, res, next) => {
    try {
        res.json({
            item: await User.findById(req.params.id )
        })
    } catch (error) {
        next(error)
    }

}
const create = async (req, res, next) => {
    try {
        const user = new User(req.body)
        await user.save()

        res.json({
            item: user
        })
    } catch (error) {
        next(error)
    }

}
const update = async (req, res, next) => {
    try {
        const data=req.body
        delete data._id
        delete data.email
        const user=await User.findByIdAndUpdate(req.params.id, data, {new:true})
       

        res.json({
            item: user
        })
    } catch (error) {
        next(error)
    }

}
const remove = async (req,res, next) => {
    try {
        const posts=await Post.find({userId:req.params.id})
        if(posts.length){
            
            const error=new Error("Access denied. Need to remove posts")
            error.statusCode="403"
            throw error
            
        }
        const user=await User.findByIdAndDelete(req.params.id)
        res.json({
            item: user
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