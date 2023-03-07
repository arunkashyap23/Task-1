import categoryModel from "../models/Category.js";

//create category
export const createCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    const doc = new categoryModel({
      categoryName,
    });
    //saving data
    const result = await doc.save();

    res.json({ message: "Data Saved", result });
  } catch (error) {
    console.log(error);
  }
};
