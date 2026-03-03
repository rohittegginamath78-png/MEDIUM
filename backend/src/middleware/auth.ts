import { verify } from "hono/jwt";
export const authMiddleware = async (c: any, next: any) => {
  const authHeader = c.req.header("Authorization");

  if (!authHeader) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = await verify(
      token,
      c.env.JWT_SECRET,
      "HS256"
    ) as { id: string };

    c.set("user", payload);

    await next();
  } catch {
    return c.json({ error: "Invalid token" }, 401);
  }
};