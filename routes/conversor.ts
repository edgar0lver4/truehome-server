import { Router } from "express";
import { getMiddlePoint } from "../controllers/conversor.controller";

const conversorRouter = Router();

conversorRouter.get('/middlePoinr/:lat/:lon',getMiddlePoint);

export default conversorRouter;