const express = require('express');
const app = express();
const horaMiddleware = require('./middlewares/horaMiddleware');
const endrouteRouter = require('./routes/endroute');
const indexRouter = require('./routes/index');
const validarHora = require('./middlewares/validarHora')

app.use(horaMiddleware)

app.use(validarHora)

app.use('/', indexRouter);

app.use('/endroute', endrouteRouter)

app.listen(3000, () => {
    console.log('El servidor esta escuchando en el puerto http://localhost:3000/')
})