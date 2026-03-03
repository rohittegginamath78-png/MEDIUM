import { Hono } from "hono";
import { Bindings } from "../types";
import { getPrisma } from "../lib/Prisma";
import { verify } from "hono/jwt";
import { JWTPayload } from "hono/utils/jwt/types";
import { Variables } from "../types";
import { authMiddleware } from "../middleware/auth";
import { auth } from "hono/utils/basic-auth";
type JwtPayload = {
  id: string
}

export const blogRouter = new Hono<{
  Bindings: Bindings
  Variables : Variables
}>();


blogRouter.post("/blog",authMiddleware ,  async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();
  
  const user = c.get("user");
  
  const post = await prisma.post.create({
    data: {
      title: body.title,
      content:body.content,
      authorId: user.id,
    },

  });
  return c.json({post});
});

blogRouter.put("/blog/:id", authMiddleware , async (c) => {
  const id = c.req.param("id");
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();
  const user = c.get("user");
  
  const existingpost = await prisma.post.findUnique({
    where :{id}
  })
  if(!existingpost){return c.json({error : " not an existing post "} , 404)}
  if(existingpost.authorId != user.id){
    return c.json({error : " access forbidden " } ,403)
  }
  const updatepost = await prisma.post.update({
    where :{
      id 
    }, data :{
      title : body.title,
      content : body.content
    }
  })
  return c.json({
    id : updatepost.id
  })
});

blogRouter.get("/bulk",async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);

  const post = await prisma.post.findMany()

  return c.json(post)

});
