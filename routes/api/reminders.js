const express = require("express");
const router = express.Router();
const Reminder = require('../../models/Reminder');
const config = require('../../config/keys')
const passport = require('passport')
const client = require('../../frontend/node_modules/twilio/index')(config.accountSid, config.authToken);

const validateReminderInput = require('../../validation/reminder.js');

router.get("/test", (req, res) => res.json({ msg: "This is the reminders route" }));

router.get('/', (req, res) => {
    Reminder.find()
        .then(reminders => res.json(reminders))
        .catch(err => res.status(404).json({ noRemindersFound: 'No reminders found' }));
});

router.get('/:title', (req, res) => {
    Reminder.findById(req.params.title)
        .then(reminder => res.json(reminder))
        .catch(err =>
            res.status(404).json({ noRemindersFound: 'No reminder found with that title' })
        );
});

router.post('/new',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        const { errors, isValid } = validateReminderInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        let newReminder = new Reminder({
            title: req.body.title,
            body: req.body.body,
            parentId: req.body.parentId,
            authorId: req.body.authorId
        });

    let arrayOfNumbers = []
        
        newReminder.save()
            .then(reminder => res.json(reminder))
            .then(arrayOfNumbers.forEach(number => {
                    client.messages
                        .create({
                            body: newReminder.body,
                            from: config.twilioNumber,
                            to: number
                        })}))
                        .then(() => {
                            res.status(200).send('Reminder was successfully sent');
                        })
                        .catch((err) => {
                            console.error(err);
                            response.status(500).send();
                        })

});

module.exports = router;