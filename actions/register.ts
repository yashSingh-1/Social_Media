"use server"

import { RegisterSchema } from "@/constants/variables"
import { z } from "zod"
import bcrypt from "bcryptjs"
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values : z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success){
        return { error: 'Invalid Fields!'}
    }

    const {email, password, age, username} = validatedFields.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

     if(existingUser){
        return { error: "Email already in use! "}
     }

    const makeingUser = await db.user.create({
        data: {
            email: email,
            password: hashedPassword,
            age: age,
            username: username
        }
    }) 

    //Send verificaion token email

    console.log(makeingUser)
    return { success: 'Authenticated' }
};