import {loadInputFile} from "../file-reader"

const groups = loadInputFile("./input.txt", "\n\n");

let answer = 0;
for (let group of groups) {
    const people = group.split("\n");
    const x = countSameLetters(people);
    answer += x;
}
console.log(answer)

function countSameLetters(people: string[]): number {
    if (people.length == 1) {
        return people[0].length;
    }
    const person = people[0];
    let sameLetters = 0;
    for (let letter of person) {
        let countGroups = 1;
        for (let i = 1; i < people.length; i++) {
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
    let sumAnswers = 0;
    for (let group of groups) {
        const answers = group.replace(/\s+/g, '');
        const set = new Set<string>(answers);
        sumAnswers += set.size;
    }
    console.log(sumAnswers);
}
