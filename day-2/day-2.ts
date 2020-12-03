import { loadInputFile } from "../file-reader"

const lines = loadInputFile("./input.txt");

console.log(partTwo());

function partOne(): number {
    let counter = 0;
    for (let line of lines) {
        const colonSeparated: Array<string> = line.split(":");
        const password = colonSeparated[1].trim();
        const letter = colonSeparated[0].split(" ")[1];
        const occurrences = getOccurrences(colonSeparated[0]);
        const number = countLetters(password, letter);
        if (number >= occurrences[0] && number <= occurrences[1]) {
            counter++;
        }
    }
    return counter;
}

function partTwo(): number {
    let counter = 0;
    for (let line of lines) {
        const colonSeparated: Array<string> = line.split(":");
        const password = colonSeparated[1].trim();
        const letter = colonSeparated[0].split(" ")[1];
        const occurrences = getOccurrences(colonSeparated[0]);
        const firstPositionValid = password[occurrences[0] - 1] == letter;
        const secondPositionValid = password[occurrences[1] - 1] == letter;
        if ((firstPositionValid || secondPositionValid) && !(firstPositionValid && secondPositionValid)) {
            counter++;
        }
    }
    return counter;
}

function getOccurrences(occurrences: string): [number, number] {
    const numbers = occurrences.split(" ")[0].split("-");
    return [Number(numbers[0]), Number(numbers[1])];
}

function countLetters(input: string, letter: string): number {
    let counter = 0;
    for (let char of input) {
        if (char === letter) {
            counter++
        }
    }
    return counter;
}
