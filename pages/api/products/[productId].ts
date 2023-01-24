import { NextApiRequest, NextApiResponse } from "next";
import { updateProductDto } from "@/utils/validations";
import { prisma } from "@/db";

const getSingleProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: req.query.productId as string },
    });
    if (!product) {
      res.status(404).json({ error: "Product not found" });
      return;
    }
    res.status(200).json({ product });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  const productId = req.query.productId as string;
  try {
    const result = updateProductDto.safeParse(req.body);
    if (!result.success) {
      const errors = result.error.errors.map((err) => err.message);
      res.status(400).json({ error: errors });
      return;
    }

    let product = await prisma.product.findUnique({ where: { id: productId } });
    if (!product) {
      res.status(404).json({ error: "Product not found" });
      return;
    }

    product = await prisma.product.update({
      where: { id: productId },
      data: {
        ...req.body,
      },
    });
    res.status(200).json({ product });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  const { productId } = req.query;
  try {
    await prisma.product.delete({
      where: { id: req.query.productId as string },
    });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default async function (req: NextApiRequest, res: NextApiResponse) {
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
