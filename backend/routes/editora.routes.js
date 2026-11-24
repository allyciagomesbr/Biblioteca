const express = require('express');
const router = express.Router();

const editoraController = require('../controllers/editora.controller');

router.get('/editoras', editoraController.listar);

router.post('/editoras', editoraController.cadastrar);

module.exports = router;