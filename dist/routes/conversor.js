"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var conversor_controller_1 = require("../controllers/conversor.controller");
var conversorRouter = express_1.Router();
conversorRouter.get('/middlePoinr/:lat/:lon', conversor_controller_1.getMiddlePoint);
exports.default = conversorRouter;
