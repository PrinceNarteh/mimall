import { createProductDto } from "../../../utils/validations";

import Product from "../../../models/Product";
import dbConnect from "../../../utils/dbConnect";

const getAllProduct = async (req, res) => {
  const query = Object.entries(req.query);
  console.log(query);
  try {
    await dbConnect();
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const result = createProductDto.safeParse(req.body);
    if (!result.success) {
      const errors = result.error.errors.map((err) => err.message);
      res.status(400).json({ error: errors });
      return;
    }
    await dbConnect();
    const product = await Product.create(result.data);
    res.status(201).json({ product });
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
