import jwt from 'jsonwebtoken';
import {NextFunction, Request, Response} from 'express'
import { User } from '../entities/user';


export const verifyToken = async (req:Request, res:Response, next:NextFunction) => {

try {
    const token = req.headers["authorization"];
    
    if (!token) {
        
        return res.status(401).json("not authorization")
    }
    
    const decode:any = jwt.verify(token, "TEST");

    var user = await User.findOne(decode.id);

    if (!user) {
        
        return res.status(401).json("usuario no encontrado")
    }



    next()
    
} catch (error) {
    if(error.name === "JsonWebTokenError"){
        res.status(401).json({
            text: "Token Vencido o invalido"
        })
    }
    
}


}