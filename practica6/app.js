const express   =   require('express');
const app       =   express();
const port      =   3000;

// const users     =   [
//     {id: 1, name: 'Juan', surname: 'López'},        
//     {id: 2, name: 'Laura', surname: 'Gómez'},
//     {id: 3, name: 'Carlos', surname: 'Pérez'}
// ];

app.get('/users/:id', (req, res) => {
    if( isNaN(parseInt(req.params.id))){
        res.status(400).json({message: 'El id debe ser un número válido'})
    }
    try {
        const userSelected  =   users.filter( elem => elem.id   === parseInt(req.params.id));
        if (userSelected.length === 0) {
            return res.status(200).json({message: 'No hay ningún usuario con ese id.'})
        }
        res.status(200).json({
            message:    'Usuario correcto',
            user:       userSelected[0]       
        });
    } catch (error) {
        res.status(500).json({error: error.toString(error)});
    }
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
    
})