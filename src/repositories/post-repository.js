'use strict';

const mongoose = require('mongoose');
const Post = mongoose.model('Post');

exports.get = async () => {
    const res = await Post.find({});
    return res;
}

exports.create = async (data) => {
    const post = new Post(data);
    return await post.save();
}

exports.delete = async (id) => {
    const posts = await Post.findById(id);

    posts.remove();
}