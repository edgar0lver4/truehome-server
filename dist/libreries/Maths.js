"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeConversor = exports.Coords = void 0;
var Coords = /** @class */ (function () {
    function Coords() {
    }
    return Coords;
}());
exports.Coords = Coords;
var GradeConversor = /** @class */ (function () {
    function GradeConversor(grade) {
        this.grade = parseFloat(grade);
    }
    //Function to convert Decimal Grades to Minutes, seconds and miliseconds
    GradeConversor.prototype.toMSM = function () {
        var minutes = Math.trunc(this.grade); // Grades after seconds
        var decimals = this.grade - minutes;
        var preseconds = decimals * 60;
        var seconds = Math.trunc(preseconds); // Seconds after miliseconds
        var premiliseconds = preseconds - seconds;
        var miliseconds = premiliseconds * 60; // Miliseconds
        var converted = minutes + " " + seconds + "'" + miliseconds + "\"";
        return converted;
    };
    return GradeConversor;
}());
exports.GradeConversor = GradeConversor;
