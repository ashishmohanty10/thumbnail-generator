import Image from "next/image";
import { Separator } from "../ui/separator";
import { db } from "~/server/db";
import { auth } from "~/server/auth";

export type Thumbnail = {
  image: string;
};

export const recentThumbnails = async (): Promise<Thumbnail[]> => {
  const session = await auth();
  const user = session?.user;

  const data = await db.thumbnail.findMany({
    where: {
      userId: user?.id,
    },
    select: {
      image: true,
    },
    orderBy: {
      image: "desc",
    },
    take: 3,
  });

  return data;
};

export const RecentThumbnails = async () => {
  const images = await recentThumbnails();
  return (
    <div>
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Recent Thumbnail of yours
      </h3>
      <p className="text-sm text-muted-foreground">
        Download your most recent thumbnails
      </p>
      <Separator className="my-2" />
      <div className="flex items-center gap-10">
        {images.map((item, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl border py-3">
            <Image src={item.image} alt="thumbnail" width={200} height={200} />
          </div>
        ))}
      </div>
    </div>
  );
};
