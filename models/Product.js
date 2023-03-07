import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true, trim: true },
  qtyPerUnit: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  unitInStock: { type: Number, required: true },
  discontinued: { type: Boolean },
  categoryId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "category",
  },
});

const studentModel = mongoose.model("product", productSchema);

export default studentModel;
