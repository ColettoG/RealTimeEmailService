import z from "zod";

const envSchema = z.object({
    MONGO_URI: z.string(),
    PORT: z.string().optional()
});

export const env = envSchema.parse(process.env);