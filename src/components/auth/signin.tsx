"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { signInSchema, type signInSchemaType } from "~/zod-schemas/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function SigninForm() {
  const router = useRouter();
  const form = useForm<signInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: signInSchemaType) {
    const response = await signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl: "/dashboard",
      redirect: false,
    });

    if (response?.error) {
      toast.error("Sign-in error");
    } else {
      router.push("/dashboard");
      toast.success("Sign-in successful");
    }
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col gap-4">
        <Button asChild className="w-fit self-end">
          <Link href="/">
            <ChevronLeft />
            <span>Go Back</span>
          </Link>
        </Button>

        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your email and password below to sign in
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email..." {...field} type="email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Password..."
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Submit
                </Button>

                <Link
                  href="/signup"
                  className="flex items-center justify-center text-sm hover:underline"
                >
                  Don&apos;t have an account?
                </Link>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
