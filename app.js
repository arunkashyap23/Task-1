import express from "express";
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";
import productRouter from "./routes/productRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

connectDB(process.env.DATABASE_URL);

//config json file
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//load routes
app.use("/api/products", productRouter);
app.use("/api/category", categoryRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
