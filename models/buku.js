const mongoose = require('mongoose');

const BukuSchema = new mongoose.Schema({
  judulBuku: {
    type: String,
    require: true,
  },
  penerbit: String
});

//create tableotomatis
const Buku = mongoose.model("buku",BukuSchema);
module.exports = Buku;