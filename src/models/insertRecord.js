import connection from '../config/db.js';

export function InsertUrl(origUrl, shortUrl) {
    const query = 'INSERT INTO urls (origUrl, shortUrl) VALUES (?, ?)';
    const values = [origUrl, shortUrl];

    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) {
                console.error('Error executing query: ', err);
                return reject(err);
            }
            
            console.log('New URL record inserted: ', results);
            resolve('OK');
        });
    })
}