"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var airports_controller_1 = require("../controllers/airports.controller");
var cors_1 = __importDefault(require("cors"));
var corsOptions = {
    origin: '*'
};
var AirportsRouter = express_1.Router();
AirportsRouter.get('/list/:token', cors_1.default(corsOptions), airports_controller_1.getAirports);
AirportsRouter.get('/list/', airports_controller_1.getAirports);
exports.default = AirportsRouter;
