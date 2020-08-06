var sql = require('mssql');
var dbconfig = {
server: "JAVIER\\MSSQLSERVER2019",
user:"sa",
password:"Kenny08**",
database:"NORTHWND",
port :1433,
options :{
    encrypt:false
}
};


function ver(){
    var conn = new sql.ConnectionPool(dbconfig);
    conn.connect(function (err){
    if(err){
    console.log(err);
    }else{
        var req= new sql.Request(conn);
        req.query("INSERT INTO dbo.Products  (ProductName,SupplierID,CategoryID,QuantityPerUnit,UnitPrice) "+
        "VALUES('Force',26,5,'Poco',90)"
        ,function(err,recordset){
            if  (err){
                console.log(err);
            }else{
                console.log("Se han insertado: "+recordset.rowsAffected+ " filas");
                conn.close();
                conn.close();
            }
        });
    }
    });
}


ver();