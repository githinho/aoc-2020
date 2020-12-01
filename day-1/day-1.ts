const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString("UTF-8");
const inputNumbers = text.split("\n").map(it => Number(it));

for (let i = 0; i < inputNumbers.length; i++) {
    for (let j = i + 1; j < inputNumbers.length; j++) {
        for (let x = j + 1; x < inputNumbers.length; x++) {
            const first = inputNumbers[i]
            const second = inputNumbers[j]
            const third = inputNumbers[x]
            if (first + second + third == 2020) {
                console.log(`first: ${first} and second: ${second} and third: ${third}`)
                console.log(first * second * third)
            }
        }
    }
}
