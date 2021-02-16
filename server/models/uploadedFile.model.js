const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new Schema(
  {
    title: { type: String, required: true },
    fileUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const UploadedFile = mongoose.model("UploadedFile", fileSchema);
module.exports = UploadedFile;
