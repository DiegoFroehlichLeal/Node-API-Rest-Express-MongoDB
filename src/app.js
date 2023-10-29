import express from "express";
import db from "./config/dbConnect.js"
import amostras from "./models/amostra.js";
import 'dotenv/config'

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
})
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Aprendizado node');
})

app.get('/livro', async (req, res) => {
    const allBooks = await amostras.find()
    res.status(200).json(allBooks)

})

app.post('/amostras', (req, res) => {
    amostras.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso')
})
app.get('/amostras/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(amostras[index]);
})

app.put('/amostras/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    amostras[index].titulo = req.body.titulo;
    res.json(amostras);
})

app.delete('/amostras/:id', (req, res) => {
    let { id } = req.params;
    let index = buscaLivro(id);
    amostras.splice(index, 1)
    res.send(`Livro ${id} removido com sucesso`)
})


function buscaLivro(id) {
    return amostras.findIndex(livro => livro.id == id)
}

export default app