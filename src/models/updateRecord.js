import connection from '../config/db.js';

export function UpdateRecord(urlId, callback) {
    const query = 'UPDATE urls SET clicks = clicks + 1 WHERE urlId = ?';

    return new Promise((resolve, reject) => {
        connection.query(query, [urlId], (err, results) => {
            if (err) {
                console.error('Error executing query: ', err);
                return reject(err);
            }
    
            if (results.affectedRows > 0) {
                console.log('Clicks successfully incremented');
                resolve('OK');
            } else {
                reject('No record found with the given ID');
            }
        });
    })
}