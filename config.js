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
        console.log("error in database connection");
    } else {
        console.log('mysql connection successfully');
    }
});


module.exports = connection;

