const dbConnect = require('./mongodb');

const updateRecord = async () =>{
    let data = await dbConnect();
    let result = await data.updateOne({name: ''}, { $set: {name: 'surabhi'}});
    console.log(result);

}

updateRecord();