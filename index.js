import express from "express";
import 'dotenv/config'
import routes from './src/routes/index.js'
import { specs, swaggerUi } from './swagger.js';

const app = express();
const port = process.env.API_PORT

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs)); 
app.use('/api', routes);

app.get('/', (req, res) => {
    res.json({ message: 'home page'});
});

app.get('*', (req, res) => {
    res.status(400).json({ message: 'page not found'});
});

app.listen(port, () => {
    console.log(`http://localhost:${port}/api-docs`);
});