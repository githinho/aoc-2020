"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_reader_1 = require("../file-reader");
var lines = file_reader_1.loadInputFile("./input.txt");
var Operation;
(function (Operation) {
    Operation["nop"] = "nop";
    Operation["acc"] = "acc";
    Operation["jmp"] = "jmp";
})(Operation || (Operation = {}));
var Instruction = /** @class */ (function () {
    function Instruction(operation, argument) {
        this.executed = false;
        this.operation = operation;
        this.argument = Number(argument);
    }
    return Instruction;
}());
var Machine = /** @class */ (function () {
    function Machine(instructions) {
        this.position = 0;
        this.accumulator = 0;
        this.instructions = instructions;
    }
    Machine.prototype.changeInstruction = function (position) {
        switch (this.instructions[position].operation) {
            case Operation.nop:
                this.instructions[position].operation = Operation.jmp;
                break;
            case Operation.jmp:
                this.instructions[position].operation = Operation.nop;
                break;
        }
    };
    Machine.prototype.execute = function () {
        while (!this.instructions[this.position].executed) {
            var isLast = this.position == (this.instructions.length - 1);
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
    };
    return Machine;
}());
for (var i = 0; i < lines.length; i++) {
    var loadedInstructions = [];
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var args = line.split(" ");
        loadedInstructions.push(new Instruction(args[0], args[1]));
    }
    var machine = new Machine(loadedInstructions);
    machine.changeInstruction(i);
    if (machine.execute()) {
        console.log(machine.accumulator);
    }
    machine.changeInstruction(i);
}
