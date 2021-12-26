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

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(morgan('dev'));

app.use('/api/user', UserRouter)
app.use('/api/profile', ProfileRouter)
app.use('/api/post', PostRouter)

module.exports = app;