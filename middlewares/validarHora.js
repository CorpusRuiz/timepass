const validarHora = (req, res, next) => {
    const date = new Date();
    const hour = date.getHours();
    if (hour < 12) {
        res.locals.mensaje = `Aún no es la hora, espera hasta las 12:00 para entrar`;
    }
}

module.exports = validarHora;