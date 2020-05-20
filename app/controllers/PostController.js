const { Post } = require('../models/index');

module.exports = {

    async index(req, res) {
        let posts = await Post.findAll();

        res.json(posts);
    }

}