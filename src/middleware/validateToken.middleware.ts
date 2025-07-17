import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors";

export const validateTokenMiddleware = async(req:Request,res:Response,next:NextFunction):Promise<void>=>{

    let token = req.headers.authorization
    if(!token){
        throw new AppError("Necessita autorização",401)
    }

    token = token.split(" ")[1]
    jwt.verify(token,process.env.SECRET_KEY!,async(error,decoded:any)=>{
        if(error){
            return res.status(401).json({message:error.message})
        }
        if(decoded){
            req.user = {
            id :  decoded.id,
            email:decoded.email
        }
       
        }
        
    })
     next()

}