// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console

// DANGER! This is insecure. See http://twil.io/secure
// const config = require('../../../config/keys')
// const client = require('twilio')(config.accountSid, config.authToken);

// if you just run `node sms_util.js` in the terminal the message below is created and sent:

// //----------------- sending VERIFICATION sms

// arrayOfNumbers.forEach(numbers => (
//     client.verify.services(config.verifySid).verifications
//         .create({ 
//             to: numbers, 
//             channel: 'sms' 
//     })
//     .then(verification => console.log(verification.sid))
// ));


// //----------------- receiving VERIFICATION sms

// client.verify.services(config.verifySid).verificationChecks
//     .create({ 
//         to: numbers, 
//         code: `${verificationNumber}` })
//     .then(verification_check => console.log(verification_check.status));


// client.validationRequests
//     .create({ friendlyName: 'My Home Phone Number', phoneNumber: '+14158675310' })
//     .then(validation_request => console.log(validation_request.friendlyName));