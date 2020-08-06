
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

function ver(){
    var conn = new sql.ConnectionPool(config);
    conn.connect(function (err){
    if(err){
    console.log(err);
    }else{
        var req= new sql.Request(conn);
        req.query("SELECT * FROM  dbo.Products",function(err,recordset){
            if  (err){
                console.log(err);
            }else{
                console.log(recordset);
                conn.close();
            }
        });
    }
    });
}


ver();