import { redirect } from "next/navigation";
import { auth } from "~/server/auth";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/signin");
  }
  return <div>Dashboard</div>;
}
