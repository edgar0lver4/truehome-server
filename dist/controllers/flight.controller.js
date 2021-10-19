"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFlights = void 0;
var axios_1 = __importDefault(require("axios"));
var getFlights = function (req, res, next) {
    var token = req.params.token;
    try {
        if (token) {
            var url = process.env.PHP_API_URL + '?service=flight&endpoint=list';
            axios_1.default.get(url)
                .then(function (resp) {
                res.status(200);
                res.json({
                    data: resp.data
                });
            })
                .catch(function (error) {
                res.status(403);
                res.json({
                    message: "Error al conectar con el servicio"
                });
                console.log(error);
            });
        }
        else {
            res.status(403);
            res.json({
                message: "Error token invalido"
            });
        }
    }
    catch (e) {
        console.log(e);
        res.status(403);
        res.json({
            message: "Error token inexistente"
        });
    }
};
exports.getFlights = getFlights;
