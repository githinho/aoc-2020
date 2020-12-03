import { loadInputFile } from "../file-reader"

const inputNumbers = loadInputFile("./input.txt").map((it: string) => Number(it));

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
