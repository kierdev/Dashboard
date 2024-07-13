import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: [true, "Please enter product name"] },
    price: { type: Number, required: [true, "Please enter product price"] },
    category: {
      type: String,
      required: [true, "Please enter product category"],
    },
    code: {
      type: String,
      unique: true,
      required: [true, "Please enter product code"],
    },
    image_url: { type: String, default: "", required: false },
    acquisitionCost: {
      type: Number,
      required: [true, "Please enter product acquisition cost"],
    },
  },
  { collection: "Products", timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
