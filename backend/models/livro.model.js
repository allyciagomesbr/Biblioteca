const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Livro = sequelize.define('Livro', {

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },

    ano: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

});

module.exports = Livro;