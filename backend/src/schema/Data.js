const mongoose = require("mongoose");

const { Schema } = mongoose;

const DataSchema = new Schema({
<<<<<<< HEAD
  humidity: String,
=======
  humidty: String,
>>>>>>> remotes/origin/yeongbeen
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Data", DataSchema, "Data");
