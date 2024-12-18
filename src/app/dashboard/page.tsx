import Link from "next/link";
import { redirect } from "next/navigation";
import { ThumbnailCreator } from "~/components/dashboard/thumbnail-creator";
import { Button } from "~/components/ui/button";
import { auth } from "~/server/auth";
import { db } from "~/server/db";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/signin");
    return null;
  }

  const user = await db.user.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      credits: true,
    },
  });

  return (
    <div className="flex h-screen items-center justify-center md:mx-auto md:max-w-4xl">
      <div className="flex max-w-full flex-col gap-10">
        {user?.credits === 0 ? (
          <div className="flex flex-col space-y-4 px-10">
            <div>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Hi, there
              </h1>
              <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Want to create thumnail?
              </p>
            </div>

            <div>
              <p className="pb-2 leading-7 text-muted-foreground">
                Buy more credits to continue generating thumbnails
              </p>

              <Button asChild className="w-fit">
                <Link href="/dashboard/pricing">Buy Credits</Link>
              </Button>

              <div className="pt-10">
                <p>Show recent thumbnails</p>
              </div>
            </div>
          </div>
        ) : (
          <ThumbnailCreator />
        )}
      </div>
    </div>
  );
}
