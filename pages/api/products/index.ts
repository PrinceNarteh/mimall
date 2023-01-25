import { NextApiRequest, NextApiResponse } from "next";
import { createProductDto } from "@/utils/validations";
import { prisma } from "@/db";

const getAllProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json({ products });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const createProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = createProductDto.safeParse(req.body);
    if (!result.success) {
      const errors = result.error.errors.map((err) => {
        const key = err.path[0];
        return { [key]: err.message };
      });
      res.status(400).json({ error: errors });
      return;
    }

    const { brand, category, description, price, stock, title, images } =
      result.data;

    const product = await prisma.product.create({
      data: {
        title,
        description,
        price,
        stock,
        category,
        brand,
        images,
      },
    });
    res.status(201).json({ product });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export default async function (req: NextApiRequest, res: NextApiResponse) {
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
