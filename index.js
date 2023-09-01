const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'employee_database',
    port: 3306
});

connection.connect((error) =>{
    if(error){
        console.log("error", error);
    } else {
        console.log("connected");
    }
});

connection.query("select * from employee_info", (error, result)=>{
  console.log('result', result)
})