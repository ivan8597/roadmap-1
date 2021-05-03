const User = require('../model/mongo/User')
const list = async (req, res, next) => {
    try {
        const {skip=0,limit=10} =req.query
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
            item: await User.findOne({ id: req.params.id })
        })
    } catch (error) {
        next(error)
    }

}
module.exports = {
    list,
    getById
}