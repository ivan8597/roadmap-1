const Post = require("../model/mongo/Post")
const list = async (req, res) => {
    const userId = req.query.userId
    const criteria = {}
    if (userId) {
        criteria.userId = userId
    }
    res.json({
        items: await Post.find(criteria)
    })
}
const getById = async (req, res) => {
    res.json({
        item: await Post.findOne({ id: req.params.id })
    })
}
module.exports = {
    list,
    getById
}