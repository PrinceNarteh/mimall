import { createProductDto } from "../../../utils/validations";

import Product from "../../../models/Product";
import dbConnect from "../../../utils/dbConnect";

const getAllProduct = async (req, res) => {
  try {
    res.status(200).json({ message: "All Products" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const res = createProductDto.parse(req.body);
    if (!res.success) {
      const errors = res.error.errors.map((err) => err.message);
      res.status(400).json({ error: errors });
      return;
    }
    res.status(201).json({ message: "Product Created Successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default async function (req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      await getAllProduct(req, res);
      break;
    case "POST":
      await createProduct(req, res);
      break;
    default:
      res.status(405).json({ error: "Only POST and GET methods are allowed" });
      break;
  }
}
