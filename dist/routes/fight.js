"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = __importDefault(require("cors"));
var flight_controller_1 = require("../controllers/flight.controller");
var corsOptions = {
    origin: '*'
};
var FlightRouter = express_1.Router();
FlightRouter.get('/list/:token', cors_1.default(corsOptions), flight_controller_1.getFlights);
FlightRouter.get('/list/', flight_controller_1.getFlights);
exports.default = FlightRouter;
