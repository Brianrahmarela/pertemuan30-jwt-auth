const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');

const {Mahasiswa} = require('../models');
const {JWT_KEY} = require('../config')

router.post("/register", async (req, res) => {
  const user = req.body
  const hashPassword = await bcrypt.hash(user.password, 10);
    // Store hash in your password DB.
    if(!hashPassword) throw new Error("error hash password")

    const mahasiswa = await Mahasiswa.create({
      name: user.name,
      password: hashPassword
    })

    res.json({
      message: "user berhasil dibuat",
      data: mahasiswa
    })
})
router.post("/login", async (req, res) => {
  //ini inputan user
  const {name, password} = req.body
  //ini dari database, jika namanya ketemu diambil semua datanya
  let user = await Mahasiswa.findOne({name})
  // console.log(user);
  //cek apakah data ada & passnya sama
  if (user && bcrypt.compareSync(password, user.password)) {
    user = user.toObject()
    //password tdk diambil
    const {password, ...payload} = user

    // console.log(user);
    // console.log(payload);
    //buat token
      const token = jwt.sign(payload, JWT_KEY)
      res.json({
        message: "success login",
        token
      })
  } else {
      res.json({
        message: "invalid email and password",
      })
    }
})

module.exports = router;