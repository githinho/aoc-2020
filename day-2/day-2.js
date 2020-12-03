"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_reader_1 = require("../file-reader");
var lines = file_reader_1.loadInputFile("./input.txt");
console.log(partTwo());
function partOne() {
    var counter = 0;
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var colonSeparated = line.split(":");
        var password = colonSeparated[1].trim();
        var letter = colonSeparated[0].split(" ")[1];
        var occurrences = getOccurrences(colonSeparated[0]);
        var number = countLetters(password, letter);
        if (number >= occurrences[0] && number <= occurrences[1]) {
            counter++;
        }
    }
    return counter;
}
function partTwo() {
    var counter = 0;
    for (var _i = 0, lines_2 = lines; _i < lines_2.length; _i++) {
        var line = lines_2[_i];
        var colonSeparated = line.split(":");
        var password = colonSeparated[1].trim();
        var letter = colonSeparated[0].split(" ")[1];
        var occurrences = getOccurrences(colonSeparated[0]);
        var firstPositionValid = password[occurrences[0] - 1] == letter;
        var secondPositionValid = password[occurrences[1] - 1] == letter;
        if ((firstPositionValid || secondPositionValid) && !(firstPositionValid && secondPositionValid)) {
            counter++;
        }
    }
    return counter;
}
function getOccurrences(occurrences) {
    var numbers = occurrences.split(" ")[0].split("-");
    return [Number(numbers[0]), Number(numbers[1])];
}
function countLetters(input, letter) {
    var counter = 0;
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        if (char === letter) {
            counter++;
        }
    }
    return counter;
}
