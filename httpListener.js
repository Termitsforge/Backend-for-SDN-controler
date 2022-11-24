// Класс прослушивания 
/**
 * Главная задача определить входящий запрос и перенаправить на нужный обработчик.
 */
const runCommand = require("./runCommand");
module.exports = class httpListener {
    constructor() {
        this.returnObject;
    }
    /**
     * Главная функция обработки запросов.
     */
    listen(req, res) {
        if (req.url === "/testURI") {
            this.returnObject = runCommand("dir", ["/B"]);
            this.returnObject.data = this.returnObject.data.split("\r\n").filter(Boolean);
            this.returnObject.stderr = this.returnObject.stderr.split("\r\n").filter(Boolean).join('');

            res.setHeader("200", "Content-Type", 'application/json')
            res.end(JSON.stringify(this.returnObject));
        };
    }

}