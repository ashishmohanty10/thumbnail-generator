"use server";

import { redirect } from "next/navigation";
import { Signin } from "~/components/auth/signin";
import { auth } from "~/server/auth";

export default async function SigninPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div>
      <Signin />
    </div>
  );
}
