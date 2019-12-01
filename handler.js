"use strict";

const awsXRay = require("aws-xray-sdk");
const awsSdk = awsXRay.captureAWS(require("aws-sdk"));

module.exports = {
    endpoint: async event => {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `Hello, the current time is ${new Date().toTimeString()}.`
            })
        };
    },
    job: async event => {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `Job runned`
            })
        };
    }
};
