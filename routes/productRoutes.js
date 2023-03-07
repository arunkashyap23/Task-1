import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/productController.js";
const productRouter = express.Router();

productRouter.route("/createProduct").post(createProduct);
productRouter.route("/getAllProducts").get(getAllProducts);
productRouter.route("/getsingleProduct/:id").get(getSingleProduct);
productRouter.route("/updateProduct/:id").put(updateProduct);
productRouter.route("/deleteProduct/:id").delete(deleteProduct);

export default productRouter;
