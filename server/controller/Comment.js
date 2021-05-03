const Comment = require("../model/mongo/Comment")
const list = async (req, res) => {
    const postId = req.query.postId
    const criteria = {}
    if (postId) {
        criteria.postId = postId
    }
    res.json({
        items: await Comment.find(criteria)
    })
}

const getById = async (req, res) => {
    res.json({
        item: await Comment.findOne({ id: req.params.id })
    })
}
module.exports = {
    list,
    getById
}
