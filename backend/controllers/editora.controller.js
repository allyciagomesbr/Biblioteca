const { Editora, Livro } = require('../models/relacionamentos');

exports.listar = async (req, res) => {
    try {
        const editoras = await Editora.findAll();

        res.json(editoras);

    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

exports.cadastrar = async (req, res) => {
    try {
        const { nome, cidade } = req.body;

        const editora = await Editora.create({
            nome,
            cidade
        });

        res.status(201).json(editora);

    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};