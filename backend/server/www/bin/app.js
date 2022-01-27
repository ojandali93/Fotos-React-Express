const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const logger = require('logger');
const session = require('express-session');
const path = require('path');
const fileUpload = require('express-fileupload');

const app = express();

const AuthenticationRouter = require('../../../routers/AuthenticationRoutes.js')
const UserRouter = require('../../../routers/UserRoutes/UserRoutes.js')
const ProfileRouter = require('../../../routers/UserRoutes/ProfileRouter.js')
const PostRouter = require('../../../routers/PostRouters/PostRouters.js')
const FollowRouter = require('../../../routers/UserRoutes/FollowRouter.js')
const LikeRouter = require('../../../routers/PostRouters/LikeRouters.js')
const EditRouter = require('../../../routers/PostRouters/EditRouters.js')
const DownloadRouter = require('../../../routers/PostRouters/DownloadRouters.js')
const CommentRouter = require('../../../routers/PostRouters/CommentRouters.js')

// app.use(logger('dev'))
app.use(cors());
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(session({
  secret: 'helloworld',
  cookie: {maxAge: 60000},
  saveUninitialized: false,
}))
app.use(morgan('dev'))
app.use(fileUpload({
  limits: { fileSize: 100 * 1920 * 1920 },
}));

app.use('/api/auth', AuthenticationRouter)
app.use('/api/user', UserRouter)
app.use('/api/profile', ProfileRouter)
app.use('/api/follow', FollowRouter)
app.use('/api/post', PostRouter)
app.use('/api/like', LikeRouter)
app.use('/api/edit', EditRouter)
app.use('/api/download', DownloadRouter)
app.use('/api/comment', CommentRouter)

module.exports = app;