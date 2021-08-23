const User = require('../model/mongo/User')
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
module.exports = {
    list,
    getById,
    create,
    update
}