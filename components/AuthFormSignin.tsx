"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "@/constants/variables";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import Link from "next/link";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import AuthError from "./AuthError";

const AuthForm = () => {
  const [error, setError] = useState<string | undefined>("")

  const [isPending, startTransition] = useTransition();

  // 1. Define your form.
  const form = useForm<z.infer<typeof loginSchema >>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  // 2. Define a submit handler.
  function onSubmit(
    values: z.infer<typeof loginSchema>
  ) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error)
      });;
    })
  }

  return (
    <div className="flex flex-col h-screen bg-black">
      <div className="flex m-auto flex-col">
        <div className="flex flex-col text-center my-5">
          <span className="text-white text-4xl font-mono">Discuss</span>
          <span className="text-slate-400 text-sm">
                Login to your account.
          </span>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              

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

            { 
              error ? 
            <AuthError message={error}/>: null
            }
            
            <Button type="submit" className="w-full bg-slate-600" disabled={isPending}>
              Submit
            </Button>
          </form>
        </Form>
        <div className="text-slate-400 text-sm flex justify-end mt-1">

            <div>
              Don't have an account
              <Link href="/signup" className="ml-1 text-blue-600" >
                Sign Up!
              </Link>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
