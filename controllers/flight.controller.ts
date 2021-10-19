import { Request,Response,NextFunction } from 'express';
import axios from 'axios';

export const getFlights = (req:Request,res:Response,next:NextFunction) =>{
    const { token } = req.params;
    try{
        if(token){
            let url = process.env.PHP_API_URL+'?service=flight&endpoint=list';
            axios.get(url)
            .then((resp)=>{
                res.status(200);
                res.json({
                    data:resp.data
                })
            })
            .catch((error)=>{
                res.status(403);
                res.json({
                    message:"Error al conectar con el servicio"
                });
                console.log(error);
            });
        }else{
            res.status(403);
            res.json({
                message:"Error token invalido"
            });
        }
    }catch(e:any){
        console.log(e);
        res.status(403);
        res.json({
            message:"Error token inexistente"
        });
    }
}