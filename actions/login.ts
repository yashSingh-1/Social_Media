"use server"

import { signIn } from "@/auth"
import { loginSchema } from "@/constants/variables"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { AuthError } from "next-auth"
import { z } from "zod"

export const login = async (values: z.infer<typeof loginSchema>) => {
    const validatedFields = loginSchema.safeParse(values)

    const email = validatedFields.data?.email;
    const password = validatedFields.data?.password;
    console.log("Emaail, Pass", email, password)

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    } catch (error) {
        if(error instanceof AuthError){
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid Credentials"}
                default: 
                    return { error: "Something went wrong." }
            }
            throw error;
        }
    }
}