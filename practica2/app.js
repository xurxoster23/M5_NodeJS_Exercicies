// * Ejemplo de Buffer y streams *

// * Ejemplo buffer *
let bufferExample   = Buffer.alloc(10);
console.log(bufferExample);

// * Ejemplo de stream * 
const fs    =   require('fs');
let streamExample   =   fs.createReadStream('./message.txt');

streamExample.on('data', (chunk) => {
    console.log(chunk.toString());
    console.log(`Tamaño datos recibidos ${chunk.length} bytes`);  
});

// * Ejemplo de Event emiitters *
const events    =   require('events');
let eventEmitterExample =   new events.EventEmitter();

const messageFunction = () => {
    console.log('Bienvenid@');
};

eventEmitterExample.on('login', messageFunction);
eventEmitterExample.emit('login');