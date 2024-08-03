import express from 'express';
import { customAlphabet } from 'nanoid';
import { InsertUrl } from '../models/insertRecord.js';
import { FindOneByOrigUrl } from '../models/findRecord.js';
import { ValidateUrl } from '../utils/utils.js';
import dotenv from 'dotenv';
dotenv.config({ path: './.env'});

const router = express.Router();

// Wrap the callback-based FindOneByOrigUrl in a promise
function FindOneByOrigUrlPromise(origUrl) {
    return new Promise((resolve, reject) => {
        FindOneByOrigUrl(origUrl, (err, record) => {
            if (err) return reject(err);
            resolve(record);
        });
    });
}

// Wrap the callback-based InsertUrl in a promise
function InsertUrlPromise(origUrl, shortUrl) {
    return InsertUrl(origUrl, shortUrl);
}

router.post('/shortener', async(req, res) => {
    const { origUrl } = req.body;
    const base = 'short.url';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const nanoid = customAlphabet(alphabet, 8);
    const urlId = nanoid();
    
    if (ValidateUrl(origUrl)) {
        try {
            const url = await FindOneByOrigUrlPromise(origUrl);
            if (url) {
                res.json(url);
            } else {
                const shortUrl = `${base}/${urlId}`;

                const result = await InsertUrlPromise(origUrl, shortUrl);
                if (result === 'OK') {
                    res.status(200).json({ shortUrl });
                }
            }
        } catch (err) {
            console.error(err);
            res.status(500).json('Server Error');
        }
    } else {
        res.status(400).json('Invalid original URL');
    }
})

export default router;