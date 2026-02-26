import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

type Bindings = {
  DATABASE_URL: string;
};

const app = new Hono<{ Bindings: Bindings }>();
let prisma: ReturnType<typeof createPrisma> | undefined

function createPrisma(databaseUrl: string) {
  return new PrismaClient({
    accelerateUrl: databaseUrl,
  }).$extends(withAccelerate());
}


function getPrisma(databaseUrl: string) {
  if (!prisma) {
    prisma = createPrisma(databaseUrl)
  }
  return prisma
}

app.post('/api/v1/signup',async (c) => {
	const prisma =getPrisma(c.env.DATABASE_URL);
	const body = await c.req.json();

	await prisma.user.create({
		data:{
			email: body.email,
			password : body.password,
		}
	})
  return c.text("user created ")
});

app.post('/api/v1/signin', (c) => {
  return c.text('signin route');
});

app.post('/api/v1/blog', (c) => {
  return c.text('signin route');
});

app.put('/api/v1/blog', (c) => {
  return c.text('signin route');
});

app.get('/api/v1/blog/:id', (c) => {
  const id = c.req.param('id');
  return c.text(`get blog route: ${id}`);
});

app.get('/api/v1/blog/bulk', async (c) => {
  
});

export default app;
