const Comment = require("../model/mongo/Comment")
const list = async (req, res, next) => {
    try {
        const {skip=0,limit=10} =req.query
        const postId = req.query.postId
        const criteria = {}
        if (postId) {
            criteria.postId = postId
        }
        res.json({
            count: await Comment.countDocuments(criteria),
            items: await Comment.find(criteria).skip(parseInt(skip)).limit(parseInt(limit))
        })
    } catch (error) {
     next(error)
    }

}

const getById = async (req, res,next) => {
    try {
        res.json({
            item: await Comment.findById(req.params.id )
        }) 
    } catch (error) {
        next(error)
    }
    
}
module.exports = {
    list,
    getById
}
