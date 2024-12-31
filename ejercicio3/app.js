const express   =   require('express');
const app       =   express();
const port      =   5001;

app.get('/:user', (req, res) => {
    if (req.params.user !== 'xurxoster@gmail.com') {
       return res.status(401).send('401 Unauthorized');
    }
    res.status(202).send('202 Accepted');
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})