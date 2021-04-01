const User = require('../model/mongo/User')
const list = async (req, res) => {
    res.json({
        items: await User.find()
    })
}
const getById = async (req, res) => {
    res.json({
        item: await User.findOne({ id: req.params.id })
    })
}
module.exports = {
    list,
    getById
}