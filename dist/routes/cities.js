"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = __importDefault(require("cors"));
var cities_controller_1 = require("../controllers/cities.controller");
var corsOptions = {
    origin: '*'
};
var CitiesRouter = express_1.Router();
CitiesRouter.get('/list/:token', cors_1.default(corsOptions), cities_controller_1.getCities);
CitiesRouter.get('/list/', cities_controller_1.getCities);
exports.default = CitiesRouter;
