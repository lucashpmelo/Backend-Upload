'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const config = require('./config');

const app = express();

//Banco
mongoose.connect(config.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Models
const Post = require('./models/post');

//Rotas
const postRoute = require('./routes/post-route');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/files", express.static(path.resolve(__dirname,"..", "tmp", "imagens")));

//Usado para Log
app.use(morgan('dev'));

app.use('/posts', postRoute);

module.exports = app;