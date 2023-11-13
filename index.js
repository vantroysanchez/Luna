import express from "express";
import 'dotenv/config'
import routes from './src/routes/index.js'

const app = express();
const port = process.env.API_PORT

app.use('/api', routes);

app.get('/', (req, res) => {
    res.json({ message: 'home page'});
});

app.get('*', (req, res) => {
    res.status(400).json({ message: 'page not found'});
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});