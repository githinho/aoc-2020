"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_reader_1 = require("../file-reader");
var lines = file_reader_1.loadInputFile("./input.txt");
var mapOfBags = new Map();
for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
    var line = lines_1[_i];
    var bags = line.split("contain");
    var containedBags = bags[1].split(",")
        .map(function (bag) { return getBagColor(bag); })
        .map(function (bag) { return getBagColorWithNumber(bag); });
    mapOfBags.set(getBagColor(bags[0]), containedBags);
}
console.log("Part 1: ", new Set(getBagColorsThatContainColor("shiny gold")).size);
console.log("Part 2: ", countAllBagsThatBagContain("shiny gold") - 1);
function countAllBagsThatBagContain(color) {
    var _a;
    var count = 1;
    (_a = mapOfBags.get(color)) === null || _a === void 0 ? void 0 : _a.forEach(function (bag) {
        count += bag[0] * countAllBagsThatBagContain(bag[1]);
    });
    return count;
}
function getBagColorsThatContainColor(color) {
    var colors = [];
    mapOfBags.forEach(function (bags, key) {
        for (var _i = 0, bags_1 = bags; _i < bags_1.length; _i++) {
            var bag = bags_1[_i];
            if (bag[0] != 0 && bag[1] == color) {
                colors.push(key);
                getBagColorsThatContainColor(key).forEach(function (it) { return colors.push(it); });
            }
        }
    });
    return colors;
}
function getBagColor(bag) {
    return bag.substring(0, bag.indexOf("bag")).trim();
}
function getBagColorWithNumber(bag) {
    var number = Number(bag.split(" ")[0]);
    var colors = bag.substring(bag.indexOf(" ") + 1);
    if (isNaN(number)) {
        return [0, colors];
    }
    else {
        return [number, colors];
    }
}
