import express from "express";
import 'dotenv/config'

const app = express();
const port = process.env.API_PORT


app.get('/', (req, res) => {
    res.json({ message: 'Pagina inicial'});
});

app.get('*', (req, res) => {
    res.status(400).json({ message: 'Ruta no encontrada'});
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});