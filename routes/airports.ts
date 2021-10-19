import { Router } from "express";
import { getAirports } from "../controllers/airports.controller";
import cors from 'cors';

const corsOptions = {
    origin:'*'
}

const AirportsRouter = Router();

AirportsRouter.get('/list/:token',cors(corsOptions),getAirports);
AirportsRouter.get('/list/',getAirports);
export default AirportsRouter;