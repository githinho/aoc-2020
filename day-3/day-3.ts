import { loadInputFile } from "../file-reader"

const lines = loadInputFile("./input.txt");
const maxRight = lines[0].length;

console.log(
    slopeDown(1, 1) * slopeDown(1, 3 ) *
    slopeDown(1, 5) * slopeDown(1, 7) *
    slopeDown(2, 1)
);

function slopeDown(downStep: number, rightStep: number): number {
    let trees = 0;
    let down = 0;
    let right = 0;
    while (down < lines.length - 1) {
        down += downStep;
        right += rightStep;
        if (lines[down][right % maxRight] == '#') {
            trees++;
        }
    }
    return trees;
}
