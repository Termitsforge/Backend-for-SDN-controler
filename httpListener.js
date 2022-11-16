// Класс прослушивания 
/**
 * Главная задача определить входящий запрос и перенаправить на нужный обработчик.
 */

 module.exports = class httpListener {
    constructor(){

    }
    /**
     * Главная функция обработки запросов.
     */
    listen(req, res) {
        console.log(req.url);
        res.end("server is worked!");
    }

}