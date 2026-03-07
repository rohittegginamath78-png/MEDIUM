import { Hono } from "hono";
import { getPrisma } from "../lib/Prisma";
import { Bindings } from "../types";
export const userRouter = new Hono<{ Bindings: Bindings }>();

import { z } from "zod";
import { sign } from "hono/jwt";
import { signupSchema , signinSchema } from "@rohit_000/mediums-common";

// const signupSchema = z.object({
//   name : z.string().min(2),
//   email: z.string().email(),
//   password: z.string().min(6),
// });

// const signinSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(6),
// });

userRouter.post("/signup", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();
  const parsedbody = signupSchema.safeParse(body);
  if(!parsedbody.success){
    return c.json({
      error : " Invalid body creadentials"
    })
  }
  const {email , password , name } = parsedbody.data

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password,
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
  const body = await c.req.json();
  const parsedbody = signinSchema.safeParse(body);
  if(!parsedbody.success){
    return c.json({
      error: " invalid body credentials"
    },400)
  }
  const {email , password} = parsedbody.data;
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
