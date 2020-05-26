const { Post } = require('../models/index');

module.exports = {

    async index(req, res) {
        let posts = await Post.findAll();

        res.json(posts);
    },

    // Show
    async show(req, res) {
        let post = await Post.findByPk(req.params.id);

        if(!post) {
            res.status(404).json({ msg: "El post no encontrado" });
        } else {
            res.json(post);
        }
    },

    // Update
    async update(req, res) {
        let post = await Post.findByPk(req.params.id);

        if(!post) {
            res.status(404).json({ msg: "El post no encontrado" });
        } else {

            post.title = req.body.title;
            post.body = req.body.body;

            post.save().then(post => {
                res.json(post);
            })
        }
    },

    // Delete
    async delete(req, res) {
        let post = await Post.findByPk(req.params.id);

        if(!post) {
            res.status(404).json({ msg: "El post no encontrado" });
        } else {
            post.destroy().then(post => {
                res.json({ msg: "El post ha sido eliminado "});
            })
        }
    },

}