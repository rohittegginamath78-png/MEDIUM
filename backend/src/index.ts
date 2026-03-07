import { Hono } from "hono";
import { userRouter } from "./Routes/user";
import { Bindings } from "./types";
import { blogRouter } from "./Routes/blogs";
import { cors } from "hono/cors";
const app = new Hono<{
  Bindings: Bindings
}>();
app.use("*" , cors());
app.route("/api/v1", userRouter);

app.route("/api/v1" ,blogRouter)


export default app;
