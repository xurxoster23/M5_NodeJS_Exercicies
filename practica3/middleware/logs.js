const logMessage    =   (req,res,next) => {
    console.log(`Se ha realizado una petición ${req.method}`);
    next();
}

module.exports  =   logMessage;