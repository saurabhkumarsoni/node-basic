const {MongoClient} = require('mongodb');

// connection url
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

//database name
const dbName = 'admin'

async function main(){
    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    const collections = db.collection('admin-details');
    let response = await collections.find({}).toArray();
    console.log('response', response);


}

main();