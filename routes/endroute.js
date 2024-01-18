const express = require('express');
const endrouteRouter = express.Router();

endrouteRouter.get('/endroute', (req, res) => {
    res.send(`<h1>Ruta Final</h1><p>¡Bienvenido a la ruta final!</p><a href="/">Home</a>`)
})

module.exports = endrouteRouter;