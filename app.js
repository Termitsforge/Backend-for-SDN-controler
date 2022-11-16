const http = require("http");
const httpListener = require("./httpListener");
const host = "localhost";
const port = 8000;
const listener = new httpListener();

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
