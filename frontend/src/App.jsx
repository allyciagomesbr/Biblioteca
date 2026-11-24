
import { useState, useEffect } from 'react';

function App() {

    const [editoras, setEditoras] = useState([]);
    const [livros, setLivros] = useState([]);

    const [nomeEditora, setNomeEditora] = useState('');
    const [cidade, setCidade] = useState('');

    const [nomeLivro, setNomeLivro] = useState('');
    const [autor, setAutor] = useState('');
    const [ano, setAno] = useState('');
    const [editoraId, setEditoraId] = useState('');

    // Buscar editoras
    async function buscarEditoras() {
        const resposta = await fetch(
            'http://localhost:3000/api/editoras'
        );

        const dados = await resposta.json();
        setEditoras(dados);
    }

    // Buscar livros
    async function buscarLivros() {
        const resposta = await fetch(
            'http://localhost:3000/api/livros'
        );

        const dados = await resposta.json();
        setLivros(dados);
    }

    useEffect(() => {
        buscarEditoras();
        buscarLivros();
    }, []);

    // Cadastrar editora
    async function cadastrarEditora(e) {
        e.preventDefault();

        await fetch('http://localhost:3000/api/editoras', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nomeEditora,
                cidade
            })
        });

        setNomeEditora('');
        setCidade('');

        buscarEditoras();
    }

    // Cadastrar livro
    async function cadastrarLivro(e) {
        e.preventDefault();

        await fetch('http://localhost:3000/api/livros', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nomeLivro,
                autor,
                ano: Number(ano),
                editoraId: Number(editoraId)
            })
        });

        setNomeLivro('');
        setAutor('');
        setAno('');
        setEditoraId('');

        buscarLivros();
    }

    return (
        <div>

            <h1>Biblioteca</h1>

            <hr />

            <h2>Cadastrar Editora</h2>

            <form onSubmit={cadastrarEditora}>

                <input
                    placeholder="Nome da editora"
                    value={nomeEditora}
                    onChange={e => setNomeEditora(e.target.value)}
                    required
                />

                <input
                    placeholder="Cidade"
                    value={cidade}
                    onChange={e => setCidade(e.target.value)}
                    required
                />

                <button type="submit">
                    Cadastrar Editora
                </button>

            </form>

            <hr />

            <h2>Cadastrar Livro</h2>

            <form onSubmit={cadastrarLivro}>

                <input
                    placeholder="Nome do livro"
                    value={nomeLivro}
                    onChange={e => setNomeLivro(e.target.value)}
                    required
                />

                <input
                    placeholder="Autor"
                    value={autor}
                    onChange={e => setAutor(e.target.value)}
                    required
                />

                <input
                    type="number"
                    placeholder="Ano"
                    value={ano}
                    onChange={e => setAno(e.target.value)}
                    required
                />

                <select
                    value={editoraId}
                    onChange={e => setEditoraId(e.target.value)}
                    required
                >
                    <option value="">Selecione uma editora</option>

                    {editoras.map(editora => (
                        <option key={editora.id} value={editora.id}>
                            {editora.nome}
                        </option>
                    ))}

                </select>

                <button type="submit">
                    Cadastrar Livro
                </button>

            </form>

            <hr />

            <h2>Livros cadastrados</h2>

            {livros.map(livro => (

                <div key={livro.id}>

                    <h3>{livro.nome}</h3>

                    <p>Autor: {livro.autor}</p>

                    <p>Ano: {livro.ano}</p>

                    <p>
                        Editora: {livro.Editora?.nome}
                    </p>

                    <p>
                        Cidade: {livro.Editora?.cidade}
                    </p>

                    <hr />

                </div>

            ))}

        </div>
    );
}

export default App;