import { updateProductDto } from "../../../utils/validations";

import Product from "../../../models/Product";
import dbConnect from "../../../utils/dbConnect";

const getSingleProduct = async (req, res) => {
  try {
    await dbConnect();
    const product = await Product.findById(req.query.productId);
    if (!product) {
      res.status(404).json({ error: "Product not found" });
      return;
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { productId } = req.query;
  try {
    const result = updateProductDto.safeParse(req.body);
    if (!result.success) {
      const errors = result.error.errors.map((err) => err.message);
      res.status(400).json({ error: errors });
      return;
    }
    await dbConnect();
    let product = await Product.findById(productId);
    if (!product) {
      res.status(404).json({ error: "Product not found" });
      return;
    }
    product = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { productId } = req.query;
  try {
    const product = await Product.findById(productId);
    if (product) {
      await Product.findByIdAndDelete(productId);
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default async function (req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      await getSingleProduct(req, res);
      break;
    case "PATCH":
      await updateProduct(req, res);
      break;
    case "DELETE":
      await deleteProduct(req, res);
      break;
    default:
      res.status(405).json({ error: "Only GET, PATCH and DELETE" });
      break;
  }
}
