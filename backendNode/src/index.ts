import cors from 'cors';
import express from 'express';
import routes from './router';


const app = express();

app.use(cors());
app.use(routes);

app.listen(8080, () => {
    console.log("Servidor rodando")
});