import { Router } from "express";
import cors from 'cors';
import { getCities } from "../controllers/cities.controller";

const corsOptions = {
    origin:'*'
}

const CitiesRouter = Router();

CitiesRouter.get('/list/:token',cors(corsOptions),getCities);
CitiesRouter.get('/list/',getCities);
export default CitiesRouter;