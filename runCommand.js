/**
 * Модуль выполнения команд в терминале
 * Модуль реализует один публичный метод аргументом которого является строка команды.
 * https://nodejs.org/api/child_process.html#child_processspawnsynccommand-args-options
 */

const childProcess = require("child_process");

let returnObject = {
    stderr: "",
    data: [],
    finalCode: 0,
};
const defaults = {
    shell: true, 
  };
/**
 * 
 * @param {*} command  - выполняемая команда
 * @param {*} arg  - аргументы команды. Аргументы должны быть перечислены в массиве.
 */
module.exports = function runCommand(command, arg = []) {
    const childProcessRunCommand = childProcess.spawnSync(command, arg, defaults);
    returnObject.data = childProcessRunCommand.stdout.toString();
    returnObject.stderr = childProcessRunCommand.stderr.toString();
    return returnObject;
};