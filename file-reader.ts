const fs = require("fs");

export function loadInputFile(name: string): Array<string> {
    const input = fs.readFileSync(name).toString("UTF-8");
    return input.split("\n");
}
