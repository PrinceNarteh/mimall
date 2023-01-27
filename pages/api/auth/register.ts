import { prisma } from "@/db";
import { mapRoleStringToEnum } from "@/utils/mapper";
import { createAccountDto } from "@/utils/validations";
import bcrypt from "bcryptjs";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST method is allowed" });
  }

  try {
    const result = createAccountDto.safeParse(req.body);

    if (!result.success) {
      const errorsArr = result.error.errors.map((err: any) => err.message);
      return res.status(400).json({ errors: errorsArr });
    } else {
      const { email, firstName, lastName, password, role } = result.data;
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = await prisma.account.create({
        data: {
          firstName,
          lastName,
          email,
          password: hashedPassword,
          role: mapRoleStringToEnum[role],
        },
      });
      res.status(201).json({ user });
    }
  } catch (error: any) {
    if (error.message.includes("Account_email_key")) {
      res.status(409).json({ error: "Email already in use." });
      return;
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handler;
