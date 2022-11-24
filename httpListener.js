// Класс прослушивания 
/**
 * Главная задача определить входящий запрос и перенаправить на нужный обработчик.
 */
const runCommand = require("./runCommand");
 module.exports = class httpListener {
    constructor(){

    }
    /**
     * Главная функция обработки запросов.
     */
    listen(req, res) {
        if(req.url === "/testURI") {
            let returnObject = runCommand("dir", ["/B"]);
            returnObject.data = returnObject.data.split("\r\n").filter(Boolean);
            returnObject.stderr = returnObject.stderr.split("\r\n").filter(Boolean).join('');
            console.log(returnObject);
        };
        res.end("server is worked!");
    }

}