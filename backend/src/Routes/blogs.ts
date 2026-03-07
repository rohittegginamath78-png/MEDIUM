import { Hono } from "hono";
import { Bindings } from "../types";
import { getPrisma } from "../lib/Prisma";
import { Variables } from "../types";
import { authMiddleware } from "../middleware/auth";
import {z} from "zod"
import { createBlogInput , updateBlogInput } from "@rohit_000/mediums-common";


export const blogRouter = new Hono<{
  Bindings: Bindings
  Variables : Variables
}>();


blogRouter.post("/blog",authMiddleware ,  async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const jsonbody = await c.req.json();
  const body = createBlogInput.safeParse(jsonbody);
  if(!body.success){
    return c.json({error : "invalid inputs "} )
  }

  const {title  ,content } = body.data;
  const user = c.get("user");
  
  const post = await prisma.post.create({
    data: {
      title,
      content,
      authorId: user.id,
    },

  });
  return c.json({post});
});

blogRouter.put("/blog/:id", authMiddleware , async (c) => {
  const id = c.req.param("id");
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();
  const parsedbody = updateBlogInput.safeParse(body);

  if(!parsedbody.success){
    return c.json({message:"Invalid Inputs"})
  }
  const {title , content} = parsedbody.data;

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
      title ,
      content}
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
