const express   =   require('express');
const app       =   express();
const port      =   3000;
const logMessage=   require('./middleware/logs')

// * Implementación de middleware antes de la respuesta *
// app.get('/:id',logMessage, (req, res) => {
//     res.set({'Set-Cookie': 'Test-Cookie'})
//     if(req.params.id !== 'abc') {
//         return res.status(401).send('Acceso Denegado');
//     }
//     res.status(200).send('¡Hola  Mundo!');
// })

// *Implementación de una cookie para todas las peticiones por medio de un middleware *
app.use((req,res,next) => {
    res.set({'Set-Cookie': 'Set-Cookie'});
    next();
})

app.get('/otra-ruta', (req,res) => {
    res.status(200).send('Mensaje desde otra ruta');
})

// app.get('/:id', (req,res) => {
//     if(req.params.id !== 'abc') {
//         return res.status(401).send('Acceso no Autorizado');
//     }
//     res.status(200).send('¡Hola Mundo!');
// })

// * Formato JSON *
const dataExample   =   [
    {team: 'Real Madrid', city: 'Madrid'},
    {team: 'F.C. Barcelona', city: 'Barcelona'},
    {team: 'Atlético de Madrid', city: 'Madrid'},
]

app.get('/respuesta-json', (req, res, next) => {
    res.status(200).json(dataExample);
})


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhst:${port}`);
})