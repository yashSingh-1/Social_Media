import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(15),
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(15),
  username: z.string().min(5),
  age: z.string().max(2),
});

