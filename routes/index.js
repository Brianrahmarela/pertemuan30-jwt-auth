const express = require('express');
const router = express.Router();

const classRoomRouter = require('./classRoomController');
const bukuRouter = require('./bukuController')
const pinjamBukuRouter = require('./pinjamBukuController');
const mahasiswaRouter = require('./mahasiswaController');
const authRouter = require('./auth');
const verifyToken = require('../middleware/authorization');

router.use("/auth", authRouter)
router.use("/class", classRoomRouter)
router.use("/buku", bukuRouter)
router.use("/pinjambuku", verifyToken, pinjamBukuRouter)
router.use("/mahasiswa", mahasiswaRouter)

module.exports = router