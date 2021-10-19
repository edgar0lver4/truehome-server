"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var airports_1 = __importDefault(require("./routes/airports"));
var auth_1 = __importDefault(require("./routes/auth"));
var cities_1 = __importDefault(require("./routes/cities"));
var conversor_1 = __importDefault(require("./routes/conversor"));
var fight_1 = __importDefault(require("./routes/fight"));
var server_1 = __importDefault(require("./server/server"));
var server = new server_1.default();
server.addApiDir('/airports', airports_1.default);
server.addApiDir('/convert', conversor_1.default);
server.addApiDir('/cities', cities_1.default);
server.addApiDir('/auth', auth_1.default);
server.addApiDir('/flight', fight_1.default);
server.start();
