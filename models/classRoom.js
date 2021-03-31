const mongoose = require('mongoose');

const ClassRoomSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lantai: Number,
});

//create tableotomatis
const classRoom = mongoose.model("classRoom",ClassRoomSchema);
module.exports = classRoom;