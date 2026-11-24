const Editora = require('./editora.model');
const Livro = require('./livro.model');

// Uma editora possui vários livros
Editora.hasMany(Livro, {
    foreignKey: 'editoraId'
});

// Um livro pertence a uma editora
Livro.belongsTo(Editora, {
    foreignKey: 'editoraId'
});

module.exports = {
    Editora,
    Livro
};