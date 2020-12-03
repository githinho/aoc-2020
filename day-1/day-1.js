"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_reader_1 = require("../file-reader");
var inputNumbers = file_reader_1.loadInputFile("./input.txt").map(function (it) { return Number(it); });
for (var i = 0; i < inputNumbers.length; i++) {
    for (var j = i + 1; j < inputNumbers.length; j++) {
        for (var x = j + 1; x < inputNumbers.length; x++) {
            var first = inputNumbers[i];
            var second = inputNumbers[j];
            var third = inputNumbers[x];
            if (first + second + third == 2020) {
                console.log("first: " + first + " and second: " + second + " and third: " + third);
                console.log(first * second * third);
            }
        }
    }
}
