import { PrismaClient } from "@prisma/client";
import { readBody } from "h3";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password, role } = body;


  try {
    await prisma.user.create({
      data: {
        username,
        password,
        role: role.toUpperCase() as "ADMIN" | "USER", // Ensure role is uppercase and matches the enum
      },
    });
    return { ok: true };
  } catch (e) {
    console.error(e);
    return { ok: false };
  }
});
