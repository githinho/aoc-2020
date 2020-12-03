"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_reader_1 = require("../file-reader");
var lines = file_reader_1.loadInputFile("./input.txt");
var maxRight = lines[0].length;
console.log(slopeDown(1, 1) * slopeDown(1, 3) *
    slopeDown(1, 5) * slopeDown(1, 7) *
    slopeDown(2, 1));
function slopeDown(downStep, rightStep) {
    var trees = 0;
    var down = 0;
    var right = 0;
    while (down < lines.length - 1) {
        down += downStep;
        right += rightStep;
        if (lines[down][right % maxRight] == '#') {
            trees++;
        }
    }
    return trees;
}
