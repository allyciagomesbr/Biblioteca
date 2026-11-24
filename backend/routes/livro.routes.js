const express = require('express');
const router = express.Router();

const livroController = require('../controllers/livro.controller');

router.get('/livros', livroController.listar);

router.post('/livros', livroController.cadastrar);

module.exports = router;