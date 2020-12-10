import {loadInputFile} from "../file-reader";

const lines = loadInputFile("./input.txt");

let mapOfBags = new Map<string, [number, string][]>();
for (let line of lines) {
    let bags = line.split("contain");
    let containedBags = bags[1].split(",")
        .map(bag => getBagColor(bag))
        .map(bag => getBagColorWithNumber(bag));
    mapOfBags.set(getBagColor(bags[0]), containedBags);
}
console.log("Part 1: ", new Set(getBagColorsThatContainColor("shiny gold")).size);
console.log("Part 2: ", countAllBagsThatBagContain("shiny gold") - 1);

function countAllBagsThatBagContain(color: string): number {
    let count = 1;
    mapOfBags.get(color)?.forEach(bag => {
        count += bag[0] * countAllBagsThatBagContain(bag[1]);
    })
    return count;
}

function getBagColorsThatContainColor(color: string): string[] {
    let colors: string[] = [];
    mapOfBags.forEach((bags: [number, string][], key: string) => {
        for (let bag of bags) {
            if (bag[0] != 0 && bag[1] == color) {
                colors.push(key);
                getBagColorsThatContainColor(key).forEach(it => colors.push(it));
            }
        }
    });
    return colors;
}

function getBagColor(bag: string): string {
    return bag.substring(0, bag.indexOf("bag")).trim();
}

function getBagColorWithNumber(bag: string): [number, string] {
    const number = Number(bag.split(" ")[0]);
    const colors = bag.substring(bag.indexOf(" ") + 1);
    if (isNaN(number)) {
        return [0, colors];
    } else {
        return [number, colors];
    }
}
