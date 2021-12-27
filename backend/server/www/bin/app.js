const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const UserRouter = require('../../../routers/UserRoutes/UserRoutes.js')
const ProfileRouter = require('../../../routers/UserRoutes/ProfileRouter.js')
const PostRouter = require('../../../routers/PostRouters/PostRouters.js')
const FollowRouter = require('../../../routers/UserRoutes/FollowRouter.js')
const LikeRouter = require('../../../routers/PostRouters/LikeRouters.js')
const EditRouter = require('../../../routers/PostRouters/EditRouters.js')
const DownloadRouter = require('../../../routers/PostRouters/DownloadRouters.js')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(morgan('dev'));

app.use('/api/user', UserRouter)
app.use('/api/profile', ProfileRouter)
app.use('/api/follow', FollowRouter)
app.use('/api/post', PostRouter)
app.use('/api/like', LikeRouter)
app.use('/api/edit', EditRouter)

module.exports = app;