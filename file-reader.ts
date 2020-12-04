const fs = require("fs");

export function loadInputFile(name: string, split: string = "\n"): [string] {
    const input = fs.readFileSync(name).toString("UTF-8");
    return input.split(split);
}
