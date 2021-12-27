require('dotenv').config();
require('./model/mongo/db');
const express = require('express');
const multer  = require('multer')
const upload = multer({ dest: 'tmp/' })
const app = express();
const PORT = 3001;
const AuthMiddleware=require('./middleware/Auth')
const UserController=require('./controller/User')
const PostController=require("./controller/Post")
const CommentController=require("./controller/Comment")
const AdminController=require("./controller/Admin")
const FileController=require("./controller/File")

const cors = require('cors');
const { ROLE_USER, ROLE_ADMIN } = require('./config');
app.use(cors());
app.use("/uploads",express.static("uploads"))
app.use(express.static('public'));
app.use(express.json())
app.use(AuthMiddleware.userInfo)
/** USERS */
app.get('/users',UserController.list )

app.get('/users/:id',UserController.getById );
app.post('/users',AuthMiddleware.accessByRole(ROLE_ADMIN),UserController.create);
app.put('/users/:id',AuthMiddleware.isPrivate,UserController.update);
app.delete('/users/:id',AuthMiddleware.accessByRole(ROLE_ADMIN),UserController.remove);
app.post('/users/login',UserController.login)

/** ADMIN */
app.post('/admin/login',AdminController.login )

/** POSTS */
app.get('/posts', PostController.list);
app.post('/posts',AuthMiddleware.isPrivate,PostController.create);
app.put('/posts/:id',AuthMiddleware.isPrivate,PostController.update);
app.delete('/posts/:id', AuthMiddleware.isPrivate,PostController.remove);

app.get('/posts/:id', PostController.getById);
/** Comments */
app.get('/comments', CommentController.list);
app.post('/comments',CommentController.create)
app.get('/comments/:id', CommentController.getById);
app.put('/comments',AuthMiddleware.accessByRole(ROLE_ADMIN), CommentController.update);
app.delete('/comments/:id',AuthMiddleware.isPrivate, CommentController.remove);
/**files */
app.post('/files/upload',AuthMiddleware.isPrivate, upload.single('file'), FileController.upload)
app.get('/files', AuthMiddleware.isPrivate,FileController.list);
app.use('*', (req, res) => {
  res.status(404).json({
    message: '404 Not Found',
  });
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  console.log({ err });
  res.status(statusCode).send({
    message: statusCode === 500 ? 'На сервере произошла ошибка' : message,
  });
});
app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});