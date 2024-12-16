"use server";

import { redirect } from "next/navigation";
import { SigninForm } from "~/components/auth/signin";
import { auth } from "~/server/auth";

export default async function SigninPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div>
      <SigninForm />
    </div>
  );
}
