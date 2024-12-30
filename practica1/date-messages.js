const days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo'
];

const formatDate = date => `${days[date.getDay()]}, ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

const currentDateMessage    =   message  => `${message} ${formatDate(new Date())}`;

const birthDateMessage      =   date    => `Fecha de nacimiento: ${formatDate(new Date(date))}`;

module.exports = {currentDateMessage,birthDateMessage};