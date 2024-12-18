import { auth } from "~/server/auth";
import { db } from "~/server/db";

export async function Credits() {
  const session = await auth();

  if (!session?.user?.id) {
    return <div>You must be logged in to view your credits.</div>;
  }

  const user = await db.user.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      credits: true,
    },
  });

  if (!user) {
    return <div>User not found.</div>;
  }

  return <div className="py-3 text-center">{user.credits} credits left</div>;
}
