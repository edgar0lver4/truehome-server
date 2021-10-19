import {Response,Request, json, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const getSesionToken = (req:Request,res:Response) =>{
    const { uuid } = req.params;
    jwt.sign(uuid,process.env.SECRET_KEY!!,{algorithm:'HS256'},(error,token)=>{
        if(token){
            res.status(200);
            res.json({
                token:token
            });
        }else{
            res.status(400);
            res.json({
                message:"Error al crear el token"
            });
        }
    })
}
export const verifyToken = (req:Request,res:Response,next:NextFunction) =>{
    const tokenUser:any = req.headers['token'];
    console.log(tokenUser);
    if(tokenUser){
        jwt.verify(tokenUser , process.env.SECRET_KEY!! ,(err:any,decode:any)=>{
            if(err){
                res.header('Access-Control-Allow-Origin', '*');
                res.status(403);
                res.json({
                    message:"Error token invalido"
                });
            }else{
                res.header('Access-Control-Allow-Origin', '*');
                res.status(200);
                res.json({
                    token:true,
                    decode:decode
                });
                next();
            }
        });
    }else{
        res.header('Access-Control-Allow-Origin', '*');
        res.status(403);
        res.send({
            message:"Error al verificar el token"
        })
    }
}