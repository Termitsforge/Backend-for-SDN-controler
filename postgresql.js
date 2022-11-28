const Pool = require('pg').Pool
const guiDB = new Pool({
    user: 'sdngui',
    host: 'localhost',
    database: 'sdnzelax',
    password: "sdnguipass",
    port: 5432,
});

const controllerDB = new Pool({
    user: 'sdngui',
    host: 'localhost',
    database: 'sdnzelax',
    password: "sdnguipass",
    port: 5432,
});

const getHosts = function () {
    return new Promise(function (resolve, reject) {
        controllerDB.query('SELECT * FROM hosts', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}


const getSwitches = function () {
    return new Promise(function (resolve, reject) {
        guiDB.query('SELECT * FROM switches', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

module.exports = {
    getHosts,
    getSwitches,
}