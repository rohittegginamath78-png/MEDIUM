import { Hono } from "hono";
import { Bindings } from "../types";
import { getPrisma } from "../lib/Prisma";
import { verify } from "hono/jwt";
import { JWTPayload } from "hono/utils/jwt/types";

type JwtPayload = {
  id: string
  email: string
}
export const blogRouter = new Hono<{ Bindings: Bindings }>();

blogRouter.put("/blog", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);

  const authHeader = c.req.header("Authorization");

  if (!authHeader) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  const token = authHeader.split(" ")[1];
  const payload = await verify(token , c.env.JWT_SECRET , "HS256") as JwtPayload
  const post = await prisma.post.create({
    data: {
      title: " How Bun works faster than node.js",
      content:
        " because it uses language like zig and it uses javascriptCore instead of V8 engine",
      authorId: payload.id,
    },

  });
  return c.json(post);
});

blogRouter.get("/api/v1/blog/:id", (c) => {
  const id = c.req.param("id");
  return c.text(`get blog route: ${id}`);
});

blogRouter.get("/api/v1/blog/bulk", (c) => {
  return c.text("bulk");
});
