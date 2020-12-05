import {loadInputFile} from "../file-reader"

const lines = loadInputFile("./input.txt");

let freeSeats = new Map<string, boolean>();
for (let row = 10; row < 110; row++) {
    for (let column = 0; column < 8; column++) {
        freeSeats.set(getKey(row, column), true)
    }
}

let highestId = 0;
for (let line of lines) {
    const row = calculateRow(line.substring(0, 7));
    const column = calculateColumn(line.substring(7));
    freeSeats.delete(getKey(row, column))
    const seatId = calculateSeatId(row, column);
    if (seatId > highestId) {
        highestId = seatId;
    }
}
console.log("highest seat id: ", highestId)
Array.from(freeSeats.keys()).forEach(
    key => {
        const seat = key.split(":")
        const mySeatId = calculateSeatId(Number(seat[0]), Number(seat[1]))
        console.log("my seat id: ", mySeatId);
    }
)

function getKey(row: number, column: number): string {
    return `${row}:${column}`;
}

function calculateSeatId(row: number, column: number): number {
    return row * 8 + column;
}

function calculateColumn(letters: string): number {
    let range: [number, number] = [0, 7];
    for (let letter of letters) {
        range = getRange(letter, range);
    }
    return range[0];
}

function calculateRow(letters: string): number {
    let range: [number, number] = [0, 127]
    for (let letter of letters) {
        range = getRange(letter, range);
    }
    return range[0];
}

function getRange(letter: string, range: [number, number]): [number, number] {
    const newDistance = Math.ceil((range[1] - range[0]) / 2);
    if (letter == 'F' || letter == 'L') {
        range = [range[0], range[1] - newDistance];
    }
    if (letter == 'B' || letter == 'R') {
        range = [range[0] + newDistance, range[1]];
    }
    return range;
}
