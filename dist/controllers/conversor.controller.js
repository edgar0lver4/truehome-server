"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMiddlePoint = void 0;
var Maths_1 = require("../libreries/Maths");
var getMiddlePoint = function (req, res) {
    var _a = req.params, lat = _a.lat, lon = _a.lon;
    var conversor = new Maths_1.GradeConversor(lat);
    res.json({
        conversion: conversor.toMSM()
    });
};
exports.getMiddlePoint = getMiddlePoint;
