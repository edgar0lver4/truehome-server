import { Request, Response } from "express"
import { GradeConversor } from "../libreries/Maths";

export const getMiddlePoint = (req:Request,res:Response)=>{
    const {lat,lon} = req.params;
    let conversor = new GradeConversor(lat);
    res.json({
        conversion:conversor.toMSM()
    })
}