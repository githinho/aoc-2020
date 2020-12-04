"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadInputFile = void 0;
var fs = require("fs");
function loadInputFile(name, split) {
    if (split === void 0) { split = "\n"; }
    var input = fs.readFileSync(name).toString("UTF-8");
    return input.split(split);
}
exports.loadInputFile = loadInputFile;
