const router = require('express').Router();

let Event = require('../models/eventsModel');

router.route('/add').post((req, res) => {
    const eventName = req.body.eventName;
    const eventDate = Date.parse(req.body.eventDate);
    const eventDescription = req.body.eventDescription;

    const newEvent = new Event({ eventName, eventDate, eventDescription });

    newEvent.save()
        .then(() => res.json('Event added'))
        .catch(err => res.status(400).json('error: ' + err));
});

router.route('/').get((req, res) => {
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json('ERROR: ' + err));
})

router.route('/:id').get((req, res) => {
    Event.findById(req.params.id)
        .then(events => res.json(events))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

router.route('/:id').delete((req, res) => {
    Event.findByIdAndDelete(req.params.id)
        .then(() => res.json('Event deleted'))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

router.route(`/update/:id`).post((req, res) => {
    Event.findById(req.params.id)
        .then(event => {
            event.eventName = req.body.eventName;
            event.eventDate = req.body.eventDate;
            event.eventDescription = req.body.eventDescription;

            event.save()
                .then(() => res.json('Events editted'))
                .catch(err => res.status(400).json('ERROR: ' + err));
        })
        .catch(err => res.status(400).json('ERROR: ' + err));
})

module.exports = router;