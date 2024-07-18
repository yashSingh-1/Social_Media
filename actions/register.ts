"use server"

import { RegisterSchema } from "@/constants/variables"
import { z } from "zod"

export const register = async (values : z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success){
        return { error: 'Invalid Fields!'}
    }
    console.log(validatedFields)
    return { success: 'Authenticated' }
};