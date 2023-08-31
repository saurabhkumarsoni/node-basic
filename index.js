const express = require('express');
require('./config');
const AdminDetails = require('./admin');

const app = express();
app.use(express.json());

app.post('/create', async (req, res) => {
    let data = new AdminDetails(req.body);
    let result = await data.save();
    console.log(req.body);
    res.send(result);
});


app.get('/list', async (req, res) => {
    let data =await AdminDetails.find();
    res.send(data);
});

app.delete('/delete/:_id', async (req, res) => {
    let data = await AdminDetails.deleteOne(req.params);
    res.send(data);
});

app.put('/update/:_id', async (req, res) =>{
    let data = await AdminDetails.updateOne(req.params, {$set:req.body});
    res.send(data);
})


app.listen(5000);