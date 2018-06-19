const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{

try{
    if (req.headers.authorization){
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decode = jwt.verify(token,'citicollege');
    if(decode){
        next();
    }else{
        return res.status(404).json({msg:'Auth failed'});        
    }
}else{
    return res.status(404).json({msg:'Auth failed'});
}
}catch(error){
    console.log(error);
    return res.status(404).json({msg:'Auth failed'});
    }

}