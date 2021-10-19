"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.getSesionToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var getSesionToken = function (req, res) {
    var uuid = req.params.uuid;
    jsonwebtoken_1.default.sign(uuid, process.env.SECRET_KEY, { algorithm: 'HS256' }, function (error, token) {
        if (token) {
            res.status(200);
            res.json({
                token: token
            });
        }
        else {
            res.status(400);
            res.json({
                message: "Error al crear el token"
            });
        }
    });
};
exports.getSesionToken = getSesionToken;
var verifyToken = function (req, res, next) {
    var tokenUser = req.headers['token'];
    console.log(tokenUser);
    if (tokenUser) {
        jsonwebtoken_1.default.verify(tokenUser, process.env.SECRET_KEY, function (err, decode) {
            if (err) {
                res.header('Access-Control-Allow-Origin', '*');
                res.status(403);
                res.json({
                    message: "Error token invalido"
                });
            }
            else {
                res.header('Access-Control-Allow-Origin', '*');
                res.status(200);
                res.json({
                    token: true,
                    decode: decode
                });
                next();
            }
        });
    }
    else {
        res.header('Access-Control-Allow-Origin', '*');
        res.status(403);
        res.send({
            message: "Error al verificar el token"
        });
    }
};
exports.verifyToken = verifyToken;
