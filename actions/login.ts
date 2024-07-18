"use server"

import { loginSchema } from "@/constants/variables"
import { z } from "zod"

export const login = async (values: z.infer<typeof loginSchema>) => {
    const validatedFields = loginSchema.safeParse(values)

    console.log(validatedFields);
}