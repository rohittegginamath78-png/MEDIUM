import { Hono } from "hono";
import { getPrisma } from "../lib/Prisma";
import { Bindings } from "../types";
export const userRouter = new Hono<{ Bindings: Bindings }>();

import { z } from "zod";
import { sign } from "hono/jwt";
import { Jwt } from "hono/utils/jwt";

const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

userRouter.post("/signup", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();

  try {
    await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    return c.text("user created ");
  } catch (e) {
    console.log(e);
    return c.text("invalid");
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const { email, password } = await c.req.json();

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
        password: password,
      },
    });
    if (!user) {
      c.status;
      return c.json({
        message: "User not found",
      });
    }
    const jwt = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET,
    );

    return c.json({
        jwt ,message:" WELCOME U FUCKER"
    })
  } catch (e) {
    console.log(e);
    return c.text("invalid");
  }
});
