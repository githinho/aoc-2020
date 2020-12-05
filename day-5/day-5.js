"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_reader_1 = require("../file-reader");
var lines = file_reader_1.loadInputFile("./input.txt");
var freeSeats = new Map();
for (var row = 10; row < 110; row++) {
    for (var column = 0; column < 8; column++) {
        freeSeats.set(getKey(row, column), true);
    }
}
var highestId = 0;
for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
    var line = lines_1[_i];
    var row = calculateRow(line.substring(0, 7));
    var column = calculateColumn(line.substring(7));
    freeSeats.delete(getKey(row, column));
    var seatId = calculateSeatId(row, column);
    if (seatId > highestId) {
        highestId = seatId;
    }
}
console.log("highest seat id: ", highestId);
Array.from(freeSeats.keys()).forEach(function (key) {
    var seat = key.split(":");
    var mySeatId = calculateSeatId(Number(seat[0]), Number(seat[1]));
    console.log("my seat id: ", mySeatId);
});
function getKey(row, column) {
    return row + ":" + column;
}
function calculateSeatId(row, column) {
    return row * 8 + column;
}
function calculateColumn(letters) {
    var range = [0, 7];
    for (var _i = 0, letters_1 = letters; _i < letters_1.length; _i++) {
        var letter = letters_1[_i];
        range = getRange(letter, range);
    }
    return range[0];
}
function calculateRow(letters) {
    var range = [0, 127];
    for (var _i = 0, letters_2 = letters; _i < letters_2.length; _i++) {
        var letter = letters_2[_i];
        range = getRange(letter, range);
    }
    return range[0];
}
function getRange(letter, range) {
    var newDistance = Math.ceil((range[1] - range[0]) / 2);
    if (letter == 'F' || letter == 'L') {
        range = [range[0], range[1] - newDistance];
    }
    if (letter == 'B' || letter == 'R') {
        range = [range[0] + newDistance, range[1]];
    }
    return range;
}
