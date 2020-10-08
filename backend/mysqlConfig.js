const mysql = require('mysql');
const dotenv = require("dotenv");

// pour masquage infos sensibles
dotenv.config({path: './.env'});

const NAME = process.env.NAME;
const PASS = process.env.PASS;
const HOST = process.env.HOST;

// Connexion à base de données MySQL
const db = mysql.createConnection({
    host     : HOST,
    user     : NAME,
    password : PASS,
    database: 'Groupomania'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connecté a MySQL avec l \'id '  + db.threadId);
});


module.exports = db;