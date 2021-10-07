const { MongoClient } = require('mongodb');
require('dotenv').config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Substituir aqui a url do banco de dados rodando em sua maquina
const MONGO_DB_URL = process.env.MONGO_DB_URL || 'mongodb://localhost:27017/Cookmaster';
const DB_NAME = 'Cookmaster';

let db = null;

function connection() {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
      .then((conn) => {
        db = conn.db(DB_NAME);
        return db;
      });
}

module.exports = connection;