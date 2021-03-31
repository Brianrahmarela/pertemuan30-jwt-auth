const express = require('express');
const {pinjamBuku} = require('../models')

const router = express.Router();

router.get('/', async (req, res) => {
  //populate dari propertinya
  const pinjambuku = await pinjamBuku.find({}).populate("buku", "-__v").populate("nama", "-__v")
  
  try {
    res.send(pinjambuku)
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post('/', async (req, res) => {
  const pinjambuku = await pinjamBuku.create(req.body);
  console.log('post pinjambuku', pinjambuku);
  
  try {
    res.send(pinjambuku)
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;