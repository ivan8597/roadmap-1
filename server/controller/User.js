const User = require('../model/mongo/User')
const Post = require('../model/mongo/Post')
const File = require('../model/mongo/File')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');
const EXPIRES = 7 * 24 * 3600000;
const _sendError = (message = 'Invalid email/password!!!', status = 400) => {
    const err = new Error(message);
    err.statusCode = status;
    throw err;
};
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
        const user=await User.findById(req.params.id)
        let avatar = null
        if (user.avatarId) {
            avatar = await File.findById(user.avatarId)
        }

        res.json({
            item: user,
            avatar: avatar
        })
    } catch (error) {
        next(error)
    }

}
const create = async (req, res, next) => {
    try {
        const user = new User(req.body)
        user.password = User.hash(req.body.password)
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
        const data = req.body
        delete data._id
        delete data.email
        const user = await User.findByIdAndUpdate(req.params.id, data, { new: true })
        let avatar = null
        if (user.avatarId) {
            avatar = await File.findById(user.avatarId)
        }

        res.json({
            item: user,
            avatar: avatar
        })
    } catch (error) {
        next(error)
    }

}
const remove = async (req, res, next) => {
    try {
        const posts = await Post.find({ userId: req.params.id })
        if (posts.length) {

            const error = new Error("Access denied. Need to remove posts")
            error.statusCode = "403"
            throw error

        }
        const user = await User.findByIdAndDelete(req.params.id)
        res.json({
            item: user
        })
    } catch (error) {
        next(error)
    }

}
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return _sendError();
        }

        const user = await User.findOne({ email });

        if (!user) {
            return _sendError();
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return _sendError();
        }

        const cookieExp = Date.now() + EXPIRES;

        const token = jwt.sign(
            {
                exp: Math.floor(cookieExp / 1000),
                data: { id: user._id, role: user.role },
            },
            JWT_SECRET
        );
        let avatar=null
        if(user.avatarId){
          avatar=await File.findById(user.avatarId)
        }
        res.json({
            success: true,
            id: user._id,
            email: user.email,
            name: user.name,
            lastname: user.lastname,
            user: user.username,
            role: user.role,
            expires: Math.floor(cookieExp / 1000),
            token,
            avatar: avatar
        });
    } catch (error) {
        next(error)
    }

}
module.exports = {
    list,
    getById,
    create,
    update,
    remove,
    login,
}