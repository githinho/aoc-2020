import {loadInputFile} from "../file-reader";

const lines = loadInputFile("./input.txt");

enum Operation {
    nop = "nop", acc = "acc", jmp = "jmp"
}

class Instruction {
    operation: Operation;
    argument: number;
    executed: boolean = false;

    constructor(operation: string, argument: string) {
        this.operation = operation as Operation;
        this.argument = Number(argument);
    }
}

class Machine {
    instructions: Instruction[];
    position: number = 0;
    accumulator: number = 0;

    constructor(instructions: Instruction[]) {
        this.instructions = instructions;
    }

    changeInstruction(position: number) {
        switch (this.instructions[position].operation) {
            case Operation.nop:
                this.instructions[position].operation = Operation.jmp;
                break;
            case Operation.jmp:
                this.instructions[position].operation = Operation.nop;
                break;
        }
    }

    execute(): boolean {
        while (!this.instructions[this.position].executed) {
            const isLast = this.position == (this.instructions.length - 1)
            this.instructions[this.position].executed = true;
            switch (this.instructions[this.position].operation) {
                case Operation.acc:
                    this.accumulator += this.instructions[this.position].argument;
                    this.position++;
                    break;
                case Operation.jmp:
                    this.position += this.instructions[this.position].argument;
                    break;
                case Operation.nop:
                    this.position++;
                    break;
            }
            if (isLast) {
                return true;
            }
        }
        return false;
    }
}

for (let i = 0; i < lines.length; i++) {
    const loadedInstructions: Instruction[] = [];
    for (let line of lines) {
        let args = line.split(" ");
        loadedInstructions.push(new Instruction(args[0], args[1]));
    }
    const machine = new Machine(loadedInstructions);
    machine.changeInstruction(i);
    if (machine.execute()) {
        console.log(machine.accumulator);
    }
    machine.changeInstruction(i);
}
