import Link from "next/link";
import { UserProfile } from "./user-profile";
// import { Credits } from "../credits";
import { ModeToggle } from "../theme-toggle";

export function Navbar() {
  return (
    <nav className="mx-auto flex h-[--navigation-height] w-full max-w-7xl items-center justify-between border-b">
      <Link href="/" className="text-xl font-bold">
        ThumbHero
      </Link>

      <div className="flex items-center gap-4">
        <ModeToggle />
        {/* <div>
          <Credits />
        </div> */}

        <UserProfile />
      </div>
    </nav>
  );
}
