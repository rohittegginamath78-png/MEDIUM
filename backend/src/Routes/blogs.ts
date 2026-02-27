import { Hono } from "hono";
import { Bindings } from "../types";

export const blogRouter = new Hono<{ Bindings : Bindings}>();

blogRouter.put("/api/v1/blog", (c) => {
  return c.text("blog route");
});

blogRouter.get("/api/v1/blog/:id", (c) => {
  const id = c.req.param("id");
  return c.text(`get blog route: ${id}`);
});

blogRouter.get("/api/v1/blog/bulk", (c) => {
    return c.text('bulk');
});