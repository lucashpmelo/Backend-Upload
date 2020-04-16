'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const config = require('../config');

const schema = new Schema({
    name: {
        type: String,
    },
    size: {
        type: Number,
    },
    key: {
        type: String,
    },
    url: {
        type: String,
        default: '',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

schema.pre('save', function () {
    if (!this.url) {
        this.url = `${config.HTTP}files/${this.key}`;
    }
});

schema.pre('remove', function () {
    return promisify(fs.unlink)(path.resolve(__dirname, "..", "..", "tmp", "imagens", this.key));
});

module.exports = mongoose.model('Post', schema);