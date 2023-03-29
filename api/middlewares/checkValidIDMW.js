module.exports = (req, res, next)=>{
    if(!isNaN(req.params.id)){
        next()
    }else{
        return res.status(400).json({
            message: "Invalid ID :(",
            token: req.header("x-auth-token")
        })
    }
}