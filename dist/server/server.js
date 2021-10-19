"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var corsOptions = {
    origin: '*'
};
var Server = /** @class */ (function () {
    function Server() {
        this.directions = [];
        this.app = express_1.default();
        this.port = process.env.PORT || '3000';
        this.defaultPath = '/api';
    }
    Server.prototype.addApiDir = function (direction, route) {
        var direct = {
            apiDir: direction,
            router: route
        };
        this.directions.push(direct);
    };
    Server.prototype.start = function () {
        var _a, _b;
        (_a = this.app) === null || _a === void 0 ? void 0 : _a.use(cors_1.default(corsOptions));
        for (var i = 0; i < this.directions.length; i++) {
            (_b = this.app) === null || _b === void 0 ? void 0 : _b.use(this.defaultPath + this.directions[i].apiDir, this.directions[i].router);
            console.log("Listen route " + this.defaultPath + this.directions[i].apiDir);
        }
        this.listen();
    };
    Server.prototype.listen = function () {
        var _this = this;
        var _a;
        (_a = this.app) === null || _a === void 0 ? void 0 : _a.listen(this.port, function () {
            console.log('Application runs in port ' + _this.port);
        });
    };
    return Server;
}());
exports.default = Server;
