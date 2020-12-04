"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_reader_1 = require("../file-reader");
var Passport_1 = require("./Passport");
var lines = file_reader_1.loadInputFile("./input.txt", "\n\n");
var validCounter = 0;
for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
    var line = lines_1[_i];
    var x = line.split(/\s+/);
    var passport = createPassport(x);
    if (passport.isValid()) {
        validCounter++;
    }
}
console.log(validCounter);
function createPassport(passportData) {
    var map = new Map();
    for (var _i = 0, passportData_1 = passportData; _i < passportData_1.length; _i++) {
        var data = passportData_1[_i];
        var keyValue = data.split(":");
        map.set(keyValue[0], keyValue[1]);
    }
    return new Passport_1.Passport(map);
}
