
//HAY QUE INSTALAR npm install msnodesqlv8
const sql = require('mssql/msnodesqlv8')
var config = {
    driver: 'msnodesqlv8',
    server: 'ALEXANDERCONTER\\SITIOA2019', 
    database: "NORTHWND",
    options: {
        trustedConnection: true
    }
};