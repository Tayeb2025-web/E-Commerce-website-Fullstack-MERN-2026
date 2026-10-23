import mongoose from "mongoose";

const produdctSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  nameFa: { type: String, default: '' },
  descriptionFa: { type: String, default: '' },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  sizes: {
    type: Array,
    required: true,
  },
  bestSeller: {
    type: Boolean,
  },
  date: {
    type: Number,
    required: true,
  },
});


const produdctModel = mongoose.models.product || mongoose.model("product" , produdctSchema);

export default produdctModel;