import { Router } from "express";
import { getSesionToken, verifyToken } from "../controllers/auth.controller";
import cors from 'cors';
const AuthRoutes = Router();
const corsOptions = {
    origin:'*'
}

AuthRoutes.get('/sesionStart/:uuid',cors(corsOptions),getSesionToken);
AuthRoutes.post('/verify/',cors(corsOptions),verifyToken);

export default AuthRoutes;