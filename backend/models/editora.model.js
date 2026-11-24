const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Editora = sequelize.define('Editora', {

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

module.exports = Editora;