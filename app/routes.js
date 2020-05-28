const express = require('express');
const router = express.Router();

// Middlewares
const auth = require('./middlewares/auth');

// Policies
const PostPolicy = require('./policies/PostPolicy');

// Controllers
const AuthController = require('./controllers/AuthController');
const PostController = require('./controllers/PostController');

// Home
router.get('/', (req, res) => res.json({ hello: "World" }));

// Dos rutas: login y registro
// /api/singin & /api/singup
router.post('/api/signin', AuthController.signIn);
router.post('/api/signup', AuthController.signUp);

// Rutas posts
router.get('/api/posts', auth, PostController.index);
router.get('/api/posts/:id', auth, PostController.find, PostPolicy.show, PostController.show);
router.patch('/api/posts/:id', auth, PostController.find, PostPolicy.update, PostController.update);
router.delete('/api/posts/:id', auth, PostController.find, PostPolicy.delete, PostController.delete);

module.exports = router;