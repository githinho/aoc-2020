"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadInputFile = void 0;
var fs = require("fs");
function loadInputFile(name) {
    var input = fs.readFileSync(name).toString("UTF-8");
    return input.split("\n");
}
exports.loadInputFile = loadInputFile;
