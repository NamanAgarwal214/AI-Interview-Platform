const AWS = require('aws-sdk');

const uploadFile = (file, keyName, file_type) => {

    return new Promise((resolve, reject) => {
        try {
            const s3 = new AWS.S3({
                accessKeyId: process.env.S3_ACCESS_KEY,
                secretAccessKey: process.env.S3_SECRET_ACCESS,
                region: "us-east-1"
            });

            const uploadParams = {
                Bucket: 'intellihire',
                Key: keyName,
                Body: file,
                ContentType: file_type,
            };

            s3.upload(uploadParams, function (err, data) {
                if (err) {
                    return reject(err);
                }
                if (data) {
                    return resolve(data);
                }
            });
        } catch (err) {
            return reject(err);
        }
    })
}

const getSignUrlForFile = (key) => {
    return new Promise((resolve, reject) => {
        try {

            const path = require('path');
            const fileName = path.basename(key);

            const s3 = new AWS.S3({
                accessKeyId: process.env.S3_ACCESS_KEY,
                secretAccessKey: process.env.S3_SECRET_ACCESS,
                region: "us-east-1"
            });

            var params = {
                Bucket: 'intellihire',
                Key: key,
                Expires: 3000 * 60
            };

            const signedUrl = s3.getSignedUrl('getObject', params);

            if (signedUrl) {
                return resolve({
                    signedUrl,
                    fileName,
                });
            } else {
                return reject("Cannot create signed URL");
            }
        } catch (err) {
            return reject("Cannot create signed URL!");
        }
    });
}
const downloadVideo = (key) => {
    return new Promise((resolve, reject) => {
        try {

            const path = require('path');
            const fs = require("fs")

            const s3 = new AWS.S3({
                accessKeyId: process.env.S3_ACCESS_KEY,
                secretAccessKey: process.env.S3_SECRET_ACCESS,
                region: "us-east-1"
            });

            const params = {
                Bucket: 'intellihire', 
                Key: key
              };

            const readStream = s3.getObject(params).createReadStream();
            const writeStream = fs.createWriteStream(path.join('temp', 'down.mp4'));
            readStream.pipe(writeStream);

            if(writeStream){
                return resolve({
                    writeStream
                })
            }else{
                return reject("Error")
            }

        } catch (err) {
            return reject("Cannot create signed URL!");
        }
    });
}

module.exports = { uploadFile, getSignUrlForFile,downloadVideo }