import { Hono } from "hono";
import { getPrisma } from "../lib/Prisma";
import { Bindings } from "../types";
export const userRouter = new Hono<{Bindings : Bindings}>();

userRouter.post('/signup',async (c) => {
	const prisma =getPrisma(c.env.DATABASE_URL);
	const body = await c.req.json();

	try{
        await prisma.user.create({
		data:{
			email: body.email,
			password : body.password,
		}
	})
    return c.text("user created ")
    }catch(e){
        console.log(e);
        return c.text("")
    }
});