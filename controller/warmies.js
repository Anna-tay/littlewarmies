const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const collection_name = 'littlelightwarmies'

// getting all the littlelightwarmies
const getAll = async (req, res) => {
  try {
      // .find finds everything in there
      const cursor = await mongodb.getDb().db().collection(collection_name).find({});

      // Convert the cursor to an array
      const result = await cursor.toArray();

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

//getting single one
const getOne= async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

//post route
const newLittleWarmies = async (req, res) => {
  littleWarmies ={
    name: req.body.name,
    price: req.body.price,
    images: req.body.images,
    other_info: req.body.other_info
  }

  const response = await mongodb
    .getDb()
    .db()
    .collection('littlelightwarmies')
    .insertOne(littleWarmies);

  if (response.acknowledged) {
    res.status(201).json('new contact has been created' + response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};

const putLittleWarmies= async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const delLittleWarmies= async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

module.exports = {
  getAll,
  getOne,
  newLittleWarmies,
  putLittleWarmies,
  delLittleWarmies
};