const express   =   require('express');
const app       =   express();
const port      =   3000;

app.get('/info', (req, res) => {
    res.status(200).sendFile(__dirname + '/files/info.txt');
})
app.get('/ejercicios-pdf', (req, res) => {
    res.status(200).sendFile(__dirname + '/files/FS1 – M5 EJE.pdf');
})

app.listen(port, () =>  {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})