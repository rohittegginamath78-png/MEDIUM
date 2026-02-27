import { Hono } from "hono";
import { userRouter } from "./Routes/user";
import { Bindings } from "./types";
import { blogRouter } from "./Routes/blogs";

const app = new Hono<{
  Bindings: Bindings
}>();

app.route("/api/v1", userRouter);

app.route("/api/v1" ,blogRouter)


export default app;
