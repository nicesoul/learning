const express = require('express');
const router = express.Router();

// item model
const Item = require('../../models/Item');

// GET api/items
router.get('/', (req, res)=> {
    Item.find().sort({date: -1}).then(items => res.json(items))
});

//  POST api/items
router.post('/', (req, res)=> {
    const newItem = new Item({
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        size: req.body.size,
        price: req.body.price,
        comment: req.body.comment,
        inStock: req.body.inStock
    });
    newItem.save().then(item => res.json(item))
});

// DELETE api/items/:id
router.delete('/:id', (req, res)=> {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({itemRemoved: 'yep'})))
    .catch(err => res.status(404).json({itemNotFound: 'why?'})
    )
})
module.exports = router;

