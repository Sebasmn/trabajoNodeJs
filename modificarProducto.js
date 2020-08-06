var sql = require('mssql');
var dbconfig = {
server: "SEBAS\\MSSQLSERVER2019",
user:"sa",
password:"sebastianmn98",
database:"NORTHWND",
port :1433,
options :{
    encrypt:false
}
};
function modificar(){
    var conn = new sql.ConnectionPool(dbconfig);
    conn.connect(function (err){
    if(err){
    console.log(err);
    }else{
        var req= new sql.Request(conn);
        req.query("UPDATE dbo.Products SET ProductName = Alberjas ,SupplierID = 2,CategoryID = 4,QuantityPerUnit = 2,UnitPrice = 3 "+
        "WHERE ProductID  = 4"
        ,function(err,recordset){
            if  (err){
                console.log(err);
            }else{
                console.log("Se ha modificado: "+recordset.rowsAffected+ " filas");
                conn.close();
                conn.close();
            }
        });
    }
    });
}

modificar();