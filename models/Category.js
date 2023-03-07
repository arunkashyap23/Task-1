import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true, trim: true },
});

const categoryModel = mongoose.model("category", categorySchema);

export default categoryModel;
