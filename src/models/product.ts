import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    name: { type: String, required: true },
    category: {
      type: String,
      required: true,
    },
    color: { type: String, required: true },
    code: {
      type: String,
      unique: true,
      required: true,
    },
    price: { type: Number, required: true },
    acquisitionCost: {
      type: Number,
      required: true,
    },
    grossProfit: { type: Number, required: true },
    margin: { type: Number, required: true },
    status: { type: String, default: "Unavailable" },
    dateAcquired: { type: Date },
    dateReleased: { type: Date },
    image: { type: String, required: false },
    description: { type: String, required: false },
  },
  { collection: "Products" }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
