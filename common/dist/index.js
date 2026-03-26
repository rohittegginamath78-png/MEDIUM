import z from "zod";
export const signupSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6)
});
export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});
export const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
});
export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
});
//# sourceMappingURL=index.js.map