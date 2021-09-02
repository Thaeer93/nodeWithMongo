const { MongoClient } = require('mongodb');


function circulationRepo() {
  const url = 'mongodb://localhost:27017';
  const dbName = 'circulation';

  function loadData(data) {
    return new Promise(async (resolve, reject) => {
      const client = new MongoClient(url);
      try {
        await client.connect();
        const db = db.client(dbName);
        results = await db.collection('newspapers').insertMany(data);
        resolve(results);
      } catch (error) {
        reject(error) 
      }
    })
    console.log('github test');
  }

  return { loadData }

}
module.exports = circulationRepo();