const express = require("express");
const jwt = require('jsonwebtoken');
const connection = require("./config");
const app = express();

const secretKey = 'secretKey';

app.use(express.json());

app.get("/", (req, res) => {
  connection.query("select * from employee_info", (error, result) => {
    if (error) {
      res.send("error");
    } else {
      res.send(result);
    }
  });
});

app.post('/login', (req, res) =>{
  const data  = req.body;

  jwt.sign({data}, secretKey, {expiresIn: '300s'}, (error, token)=>{
    res.json({token})
  } )
});


app.post('/profile', verifyToken, (req, res)=>{
jwt.verify(req.token, secretKey, (err, authData) =>{
  if(err){
    res.send({result: 'invalid token'})
  } else {
    res.json({
      message: "profile accessed",
      authData
    })
  }
})
} )

function verifyToken(req, res, next){
const bearerHeader = req.headers['authorization'];
if(typeof bearerHeader !== 'undefined'){
  const bearer = bearerHeader.split(" ");
  const token = bearer[1];
  req.toke = token;
  next();
} else{
  res.send({
    result: 'token is not valid'
  })
}
}


app.post("/create-employee", (req, res) => {
  const data = req.body;
  connection.query(
    "INSERT INTO employee_info SET ?",
    data,
    (error, result, fields) => {
      if (error) throw error;
      res.send(result);
    }
  );
});

app.put("/:emp_id", (req, res) => {
  const data = [
    req.body.first_name,
    req.body.last_name,
    req.body.phone,
    req.body.email,
    req.body.reporting_manager,
    req.params.emp_id,
  ];

  connection.query(
    "UPDATE employee_info SET first_name = ?, last_name = ?, phone = ?, email = ?, reporting_manager = ? WHERE emp_id = ?",
    data,
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error updating employee");
      } else {
        res.send(results);
      }
    }
  );
});

app.delete("/:emp_id", (req, res) => {
  connection.query(
    "DELETE FROM employee_info Where emp_id = " + req.params.emp_id,
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error deleting employee");
      } else {
        res.send(results);
      }
    }
  );
});

app.listen(5000);
