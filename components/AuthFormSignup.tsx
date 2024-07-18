"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema, RegisterSchema } from "@/constants/variables";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import Link from "next/link";
import { register } from "@/actions/register";

const AuthForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof RegisterSchema >>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      age: "",
    }
  });

  // 2. Define a submit handler.
  function onSubmit(
    values: z.infer<typeof RegisterSchema>
  ) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    register(values);
  }

  return (
    <div className="flex flex-col h-screen bg-black">
      <div className="flex m-auto flex-col">
        <div className="flex flex-col text-center my-5">
          <span className="text-white text-4xl font-mono">Discuss</span>
          <span className="text-white text-sm">

              Register your account.
          </span>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <CustomInput
                  control={form.control}
                  title="Username"
                  name="username"
                  placeholder="Enter your User Name"
                />
                <CustomInput
                  control={form.control}
                  title="Age"
                  name="age"
                  placeholder="Enter your Age"
                />
              

            <CustomInput
              control={form.control}
              title="Email"
              name="email"
              placeholder="Enter your Email"
            />

            <CustomInput
              control={form.control}
              title="Password"
              name="password"
              placeholder="********"
            />
            
            <Button type="submit" className="w-full bg-slate-600">
              Submit
            </Button>
          </form>
        </Form>
        <div className="text-slate-400 text-sm flex justify-end mt-1">

            <div>
              Already have an account?
              <Link href="/signin" className="ml-1 text-blue-600">
                Sign in!
              </Link>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
