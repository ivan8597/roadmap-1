require('dotenv').config();
require('./model/mongo/db');
const express = require('express');
const app = express();
const PORT = 3001;
const UserController=require('./controller/User')
const PostController=require("./controller/Post")
const CommentController=require("./controller/Comment")
const cors = require('cors');
app.use(cors());
app.use(express.static('public'));

/** USERS */
app.get('/users',UserController.list );

app.get('/users/:id',UserController.getById );

/** POSTS */
app.get('/posts', PostController.list);

app.get('/posts/:id', PostController.getById);
/** Comments */
app.get('/comments', CommentController.list);

app.get('/comments/:id',CommentController.getById);

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