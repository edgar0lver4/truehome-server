"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controller_1 = require("../controllers/auth.controller");
var cors_1 = __importDefault(require("cors"));
var AuthRoutes = express_1.Router();
var corsOptions = {
    origin: '*'
};
AuthRoutes.get('/sesionStart/:uuid', cors_1.default(corsOptions), auth_controller_1.getSesionToken);
AuthRoutes.post('/verify/', cors_1.default(corsOptions), auth_controller_1.verifyToken);
exports.default = AuthRoutes;
