const express   =   require('express');
const app       =   express();
const port      =   3000;

app.get('/respuesta-archivo', (req, res) => {
    res.status(200).sendFile(__dirname + '/resources/FS1 – M4_campus.pdf')
})

app.listen(port, () => {
    console.log(`Server Listen by ${port} port`);
    
})