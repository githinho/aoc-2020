"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_reader_1 = require("../file-reader");
var groups = file_reader_1.loadInputFile("./input.txt", "\n\n");
var answer = 0;
for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
    var group = groups_1[_i];
    var people = group.split("\n");
    var x = countSameLetters(people);
    answer += x;
}
console.log(answer);
function countSameLetters(people) {
    if (people.length == 1) {
        return people[0].length;
    }
    var person = people[0];
    var sameLetters = 0;
    for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
        var letter = person_1[_i];
        var countGroups = 1;
        for (var i = 1; i < people.length; i++) {
            if (people[i].includes(letter)) {
                countGroups++;
            }
        }
        if (countGroups == people.length) {
            sameLetters++;
        }
    }
    return sameLetters;
}
function part1() {
    var sumAnswers = 0;
    for (var _i = 0, groups_2 = groups; _i < groups_2.length; _i++) {
        var group = groups_2[_i];
        var answers = group.replace(/\s+/g, '');
        var set = new Set(answers);
        sumAnswers += set.size;
    }
    console.log(sumAnswers);
}
