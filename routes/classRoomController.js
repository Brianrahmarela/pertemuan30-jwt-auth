const express = require('express');
const router = express.Router()
const {classRoom} = require('../models');

router.get("/class", async(req,res) =>{
  const classroom = await classRoom.find()

  res.json({
    messages: "success get data",
    data: classroom
  })
})

router.post("/class", async(req,res) =>{
  const classroom = await classRoom.create(req.body)

  res.json({
    messages: "success post data",
    data: classroom
  })
})

module.exports = router;
