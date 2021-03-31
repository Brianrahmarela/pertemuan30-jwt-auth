const mongoose = require('mongoose');

const pinjamBukuSchema = new mongoose.Schema({
  nama: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "mahasiswa",
  },
  buku: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "buku",
  }
});

//create tableotomatis
const pinjamBuku = mongoose.model("pinjambuku",pinjamBukuSchema);
module.exports = pinjamBuku;