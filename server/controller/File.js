const path = require("path")
const fs = require("fs")
const File=require("../model/mongo/File")
const STORAGE_URL = "http://localhost:3001/uploads"
const list = async (req, res, next) => {
    try {
        const { skip = 0, limit = 10 } = req.query
        const criteria = {userId:req.userId}
        res.json({
            count: await File.countDocuments(criteria),
            items: await File.find(criteria).skip(parseInt(skip)).limit(parseInt(limit)).sort({
            _id: -1
            })
        })
    } catch (error) {
        next(error)
    }

}
const upload = async (req, res, next) => {
    try {
        const { path: tmppath, originalname } = req.file
        const userDirpath=path.join(__dirname, `../uploads/${req.userId}`)
        if(!fs.existsSync(userDirpath)){
            fs.mkdirSync(userDirpath)
        }
        const sourcePath = path.join(__dirname, "../", tmppath)
        const ext = originalname.split(".").pop()
        const fileName = new Date().getTime() + "." + ext
        const distPath = path.join(userDirpath, `./${fileName}`)
        console.log({ sourcePath, distPath })
        fs.renameSync(sourcePath, distPath)
        const file=new File({
            userId:req.userId,
            path:`${req.userId}/${fileName}`
        })
        await file.save()
        res.json({
            item:file
        })
    }
    catch (error) {
        next(error)
    }
}
module.exports = {
    upload,
    list
}