const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
    res.send(`
    <h1>Bienvenido</h1>
    <p>La hora actual es: ${req.date}</p>
    <form action="/endroute">
       <button type="submit">Entrar</button>
    </form>
    `)
})

indexRouter.use((req, res) => {
    res.status(400).send(`<h1>page not found</h1><a href="/">Return Home</a>`)
})

module.exports = indexRouter;