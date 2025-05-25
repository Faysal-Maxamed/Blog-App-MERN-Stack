import jwt from 'jsonwebtoken';
import { secret } from '../controllers/userController.js';


export const authentication =(req,res,next)=>{
    const token = req.cookies.token;
    console.log("token",token);

    if(!token) return res.status(405).json({message:"Access dined please login"})

        try {
            const decode =jwt.verify(token,secret);
            req.user=decode;
            next();
        } catch (error) {
            console.log(error)
        }
}