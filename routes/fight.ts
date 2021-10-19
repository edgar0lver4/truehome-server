import { Router } from "express";
import cors from 'cors';
import { getFlights } from "../controllers/flight.controller";

const corsOptions = {
    origin:'*'
}

const FlightRouter = Router();

FlightRouter.get('/list/:token',cors(corsOptions),getFlights);
FlightRouter.get('/list/',getFlights);
export default FlightRouter;