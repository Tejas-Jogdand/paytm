import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'

function authMiddleware(req,res,next){
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(403).json({
            message:"Pass Valid token"
        })
    }

    const token = authHeader.split(' ')[1];

    try{
        const decoded = jwt.verify(token,process.env.JWT_PASS)
        
        req.userId = decoded.userId;
        // console.log(req.userId)
        next();
    }catch(e){
        res.status(403).json({
            message : "Coundn't verify token"
        })
    }

}

export default authMiddleware;