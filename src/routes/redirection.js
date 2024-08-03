import express from 'express';
import { UpdateRecord } from '../models/updateRecord.js';
import { FindOneByUrlId } from '../models/findRecord.js';

const router = express.Router();

function FindOneByUrlIdPromise(urlId) {
    return new Promise((resolve, reject) => {
        FindOneByUrlId(urlId, (err, record) => {
            if (err) return reject(err);
            resolve(record);
        });
    });
}

function UpdateRecordPromise(urlId) {
    return UpdateRecord(urlId);
}

router.get('/:urlId', async(req, res) => {
    try {
        const url = await FindOneByUrlIdPromise(req.params.urlId);

        if (url) {
            // Update by incrementing click number of that urlId
            const result = await UpdateRecordPromise(req.params.urlId);
            if (result === 'OK') {
                res.redirect(url.origUrl);
            }
        };
    } catch (err) {
        console.error(err);
        res.status(500).json('Server Error');
    }
})

export default router;