import { loadInputFile } from "../file-reader"
import { Passport } from "./Passport"

const lines = loadInputFile("./input.txt", "\n\n");

let validCounter = 0;
for (let line of lines) {
    const x = line.split(/\s+/)
    const passport = createPassport(x)
    if (passport.isValid()) {
        validCounter++;
    }
}
console.log(validCounter)

function createPassport(passportData: string[]): Passport {
    const map = new Map<string, string>()
    for (let data of passportData) {
        const keyValue = data.split(":")
        map.set(keyValue[0], keyValue[1])
    }
    return new Passport(map)
}
