import Link from "next/link";
import { redirect } from "next/navigation";
import { RecentThumbnails } from "~/components/dashboard/recent-thumbnails";
import { ThumbnailCreator } from "~/components/dashboard/thumbnail-creator";
import { Button } from "~/components/ui/button";
import { auth } from "~/server/auth";
import { db } from "~/server/db";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/signin");
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
    <div className="flex items-center justify-center pt-16 md:mx-auto md:max-w-4xl">
      <div className="flex max-w-full flex-col gap-10">
        {user?.credits === 0 ? (
          <div className="flex flex-col space-y-4 px-10">
            <div className="w-full">
              <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight md:text-left lg:text-5xl">
                Hi, there
              </h1>
              <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Want to create thumbnail?
              </p>
            </div>

            <div>
              <div className="mt-8">
                <RecentThumbnails />
              </div>
            </div>
          </div>
        ) : (
          <ThumbnailCreator>
            <RecentThumbnails />
          </ThumbnailCreator>
        )}
      </div>
    </div>
  );
}
