const express = require('express');
const {Mahasiswa} = require('../models')

const router = express.Router();

router.get('/mahasiswa', async (req, res) => {
  //populate dari propertinya
  const mahasiswa = await Mahasiswa.find({}, "-score -nomerAbsen -__v").populate("classRoom", "-__v")
  
  try {
    res.send(mahasiswa)
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get('/mahasiswa/:id', async (req, res) => {
  const mahasiswa = await Mahasiswa.findById(req.params.id)
  try {
    res.send(mahasiswa)
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post('/mahasiswa', async (req, res) => {
  const mahasiswa = await Mahasiswa.create(req.body);
  console.log('post mahasiswa', mahasiswa);
  
  try {
    res.send(mahasiswa)
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put('/mahasiswa/:id', async (req, res) => {
  const mahasiswa = await Mahasiswa.findByIdAndUpdate(req.params.id,req.body);
  console.log('update mahasiswa', mahasiswa);
  
  try {
    res.send(mahasiswa)
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.delete('/mahasiswa/:id', async (req, res) => {
  const mahasiswa = await Mahasiswa.findByIdAndDelete(req.params.id);
  console.log('delete mahasiswa', mahasiswa);
  
  try {
    res.send(mahasiswa)
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;