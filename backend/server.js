const express = require('express');
const { engine } = require('express-handlebars');
const cors = require('cors');

const sequelize = require('./database');

require('./models/relacionamentos');

const livroRoutes = require('./routes/livro.routes');
const editoraRoutes = require('./routes/editora.routes');

const app = express();

app.use(cors());
app.use(express.json());

// Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/pagina', (req, res) => {
    res.render('home');
});

// Rotas
app.use('/api', livroRoutes);
app.use('/api', editoraRoutes);

// Inicialização
sequelize.sync().then(() => {

    app.listen(3000, () => {
        console.log('Servidor iniciado na porta 3000');
    });

});