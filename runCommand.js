/**
 * Модуль выполнения команд в терминале
 * Модуль реализует один публичный метод аргументом которого является строка команды.
 */

const childProcess = require("child_process");

let returnObject = {
    error: "",
    stderr: "",
    data: [],
    finalCode: 0,
};
const defaults = {
    shell: true,
  };
/**
 * Функция выполнения команды в теримнале
 * Выполнение функции будет асинхронное.
 * @param {*} command  - выполняемая команда
 * @param {*} arg  - аргументы команды. Аргументы должны быть перечислены в массиве
 */
module.exports = function runCommandAsync(command, arg = []) {
    const childProcessRunCommand = childProcess.spawn(command, arg, defaults);

    childProcessRunCommand.stdout.on("data", data => {
        returnObject.data.push(data.toString());
    });

    childProcessRunCommand.stderr.on("data", data => {
        returnObject.stderr = data;
    });

    childProcessRunCommand.on("error", error => {
        returnObject.error = error;
    });

    childProcessRunCommand.on("close", code => {
        returnObject.finalCode = code;
    });

    return returnObject;
};
/**
 * Функция выполнения команды в теримнале
 * Выполнение функции будет синхронное.
 * @param {*} command  - выполняемая команда
 * @param {*} arg  - аргументы команды. Аргументы должны быть перечислены в массиве
 */
module.exports = function runCommandSync(command, arg = []) {
    const childProcessRunCommand = childProcess.spawnSync(command, arg, defaults);
    returnObject.data = childProcessRunCommand.stdout.toString();
    returnObject.stderr = childProcessRunCommand.stderr.toString();
    return returnObject;
};