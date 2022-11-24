const http = require("http");
const httpListener = require("./httpListener");
const host = "localhost";
const port = 8000;
const listener = new httpListener();


// let a = function() {
//   var childProcess = require("child_process");
//   var oldSpawn = childProcess.spawn;
//   function mySpawn() {
//       console.log('spawn called');
//       console.log(arguments);
//       var result = oldSpawn.apply(this, arguments);
//       return result;
//   }
//   childProcess.spawn = mySpawn;
// };
// a();
/**
 * Переменная сервера
 * https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
 * Луччше пользоваться поиском.
 */
const server = http.createServer(listener.listen);

/**
 * Функция запуска сервера
 */
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

