const {MongoClient} = require('mongodb');

// connection url
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

//database name
const dbName = 'admin'

async function dbConnect(){
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    return db.collection('admin-details');
}


module.exports = dbConnect;