import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config({ path: './src/config/.env'});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'url_shortener'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connection to the database: ' , err);
        return;
    }

    console.log('Connected to the MySQL server.');
})

export default connection;