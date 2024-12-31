const getAge    =   date    => {
    return parseInt(new Date().getFullYear())-parseInt(new Date(date).getFullYear());
}

module.exports  =   getAge;

