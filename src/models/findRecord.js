import connection from '../config/db.js';

export function FindOneByUrlId(urlId, callback) {
    const query = 'SELECT * FROM urls WHERE urlId = ? LIMIT 1';

    connection.query(query, [urlId], (err, results) => {
        if (err) {
            console.error('Error executing query: ', err);
            return callback(err);
        }
        
        const record = results.length > 0 ? results[0] : null;
        callback(null, record);
    });
}

export function FindOneByOrigUrl(origUrl, callback) {
    const query = 'SELECT * FROM urls WHERE origUrl = ? LIMIT 1';

    connection.query(query, [origUrl], (err, results) => {
        if (err) {
            console.error('Error executing query: ', err);
            return callback(err);
        }
        
        const record = results.length > 0 ? results[0] : null;
        callback(null, record);
    });
}