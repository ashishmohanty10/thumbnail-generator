import { redirect } from "next/navigation";
import { SignupForm } from "~/components/auth/signup";
import { auth } from "~/server/auth";

export default async function SignupPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <div>
      <SignupForm />
    </div>
  );
}
