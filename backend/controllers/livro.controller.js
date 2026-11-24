const { Editora, Livro } = require('../models/relacionamentos');

// Listar livros com suas editoras
exports.listar = async (req, res) => {
    try {
        const livros = await Livro.findAll({
            include: Editora
        });

        res.json(livros);

    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

// Cadastrar livro
exports.cadastrar = async (req, res) => {
    try {
        const { nome, autor, ano, editoraId } = req.body;

        const livro = await Livro.create({
            nome,
            autor,
            ano,
            editoraId
        });

        res.status(201).json(livro);

    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};