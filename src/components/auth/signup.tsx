"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { signUpSchema, type signUpSchemaType } from "~/zod-schemas/zodSchema";
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
import { signupAction } from "~/app/actions/authActions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function SignupForm() {
  const router = useRouter();
  const form = useForm<signUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: signUpSchemaType) {
    try {
      console.log(values);
      const error = await signupAction(values);

      if (error) {
        toast.error("Sign-up error:");
      } else {
        router.push("/dashboard");
        toast.success("Sign-up successful: Sign in with you new account!!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col gap-4">
        <Button asChild className="w-fit self-end">
          <Link href="/">
            <ChevronLeft />
            Go back
          </Link>
        </Button>

        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Sign up </CardTitle>
            <CardDescription>
              Register yourself, by entering name , email and password
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
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your name..."
                          {...field}
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email..."
                          {...field}
                          type="email"
                        />
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
                          placeholder="Enter your password..."
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="w-full" type="submit">
                  Submit
                </Button>

                <Link
                  href="/signin"
                  className="flex items-center justify-center text-sm hover:underline"
                >
                  Already have an account?
                </Link>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
