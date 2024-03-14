import mongoose from "mongoose";
import { FaMarsDouble } from "react-icons/fa";
//schema
const orderSchema = new mongoose.Schema({
  products: [
    {
      type: mongoose.ObjectId,
      ref: "Products",
    },
  ],
  payment: {},
  buyer: {
    type: mongoose.ObjectId,
    ref: "users",
  },
  status: {
    type: String,
    default: "Not Process",
    enum: ["Not Process", "Processing", "Shipped"],
  },
});
export default mongoose.model("Order", orderSchema);
