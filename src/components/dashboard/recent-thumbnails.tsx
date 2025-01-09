import { Separator } from "../ui/separator";

export const RecentThumbnails = () => {
  return (
    <div>
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Recent Thumbnail of yours
      </h3>

      <p className="text-sm text-muted-foreground">
        Download your most recent thumbnails
      </p>

      <Separator className="my-2" />
    </div>
  );
};
