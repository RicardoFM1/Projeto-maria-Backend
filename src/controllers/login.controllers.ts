import { Request, Response } from "express";
import { iCreateLogin, iReturnLogin } from "../schemas/login.schemas";
import { createLoginService } from "../services/createLogin.service";

export const createLoginController=async(req:Request,res:Response):Promise<Response>=>{

    const loginData:iCreateLogin = req.body
    const user: iReturnLogin = await createLoginService(loginData)

    return res.status(200).json(user)

}