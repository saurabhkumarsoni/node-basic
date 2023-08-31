const dbConnect = require('./mongodb');

const deleteRecord = async () =>{
    let data = await dbConnect();
    let result = await data.deleteMany({name: 'sonali saurabh'});
    console.log(result);
}

deleteRecord();