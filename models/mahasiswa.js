const mongoose = require('mongoose');

const MahasiswaSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  score: Number,
  nomerAbsen: Number,
  classRoom: {
    type: mongoose.Schema.Types.ObjectId,
    //refnya  acuannyya di model
    ref: "classRoom"
  }
});

//create tableotomatis
const Mahasiswa = mongoose.model("mahasiswa",MahasiswaSchema);
module.exports = Mahasiswa;