const express = require('express');
const router = express.Router();

const contactCon = require('../controller/warmies');

// GET /feed/posts
router.get('/', contactCon.getAll);

router.get('/:id', contactCon.getOne);

//create statement
router.post('/', contactCon.newLittleWarmies);

router.put('/', contactCon.putLittleWarmies);
router.delete('/', contactCon.delLittleWarmies);


module.exports = router;