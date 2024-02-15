const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')
const { userValidationRules, validate } = require('../validator');

const contactCon = require('../controller/warmies');

// GET /feed/posts
router.get('/', contactCon.getAll);

router.get('/:id', contactCon.getOne);

//create statement
// this is were we do all the validation
router.post('/', userValidationRules(), validate, contactCon.newLittleWarmies);

// update statement
router.put('/:id', contactCon.putLittleWarmies);

// delete statement
router.delete('/:id', contactCon.delLittleWarmies);


module.exports = router;