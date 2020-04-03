const router = require('express').Router();
const List = require('../models/list.model');

router.route('/').get((req, res) => {
    List.find()
        .then(lists => res.json(lists))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    console.log(title);
    const newList = new List({
        title,
        tasks: []
    });

    newList.save()
    .then(() => res.json('New List added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    List.findById(req.params.id)
        .then(list => res.json(list))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
    List.findByIdAndDelete(req.params.id)
        .then(() => res.json('List deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
    List.findById(req.params.id)
        .then(list => {
            list.title = req.body.title;
            list.tasks = req.body.tasks;
            list.save()
                .then(() => res.json('List updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
