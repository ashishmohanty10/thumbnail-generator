import Link from "next/link";
import { UserProfile } from "./user-profile";
import { ModeToggle } from "../theme-toggle";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 mx-auto w-full max-w-7xl">
      <div className="flex h-[--navigation-height] items-center justify-between border-b px-4 backdrop-blur-md dark:bg-black/30 xl:px-0">
        <Link href="/" className="text-xl font-bold">
          ThumbHero
        </Link>

        <div className="flex items-center gap-4">
          <ModeToggle />

          <UserProfile />
        </div>
      </div>
    </nav>
  );
}
