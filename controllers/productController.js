import productModel from "../models/Product.js";
import categoryModel from "../models/Category.js";

//create product
export const createProduct = async (req, res) => {
  try {
    const {
      productName,
      qtyPerUnit,
      unitPrice,
      unitInStock,
      discontinued,
      categoryId,
    } = req.body;
    const doc = new productModel({
      productName,
      qtyPerUnit,
      unitPrice,
      unitInStock,
      discontinued,
      categoryId,
    });
    //saving data
    const result = await doc.save();

    res.json({ message: "Data Saved", result });
  } catch (error) {
    console.log(error);
  }
};

//get all products
export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await productModel.find().populate("categoryId");
    res.json({ allProducts });
  } catch (error) {
    console.log(error);
  }
};

//get single product
export const getSingleProduct = async (req, res) => {
  try {
    const singleProduct = await productModel
      .findById(req.params.id)
      .populate("categoryId");
    res.json({ singleProduct });
  } catch (error) {
    console.log(error);
  }
};

//update product
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ updatedProduct });
  } catch (error) {
    console.log(error);
  }
};

//delete product
export const deleteProduct = async (req, res) => {
  try {
    const { categoryId } = await productModel.findOneAndDelete(req.params.id);
    await categoryModel.findByIdAndDelete(categoryId);
    res.json({ message: "Deleted" });
  } catch (error) {
    console.log(error);
  }
};
