const functions = require('firebase-functions');
const cors = require('cors');
const fs = require('fs');
const uuid = require('uuid-v4');
const {Storage} = require('@google-cloud/storage');

const storage = new Storage({
    projectId: 'insta-clone-6e60e',
    keyFile: 'insta-clone.json'
})

exports.uploadImage = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        
    })
});
