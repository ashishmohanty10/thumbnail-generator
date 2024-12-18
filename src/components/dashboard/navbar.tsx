import { Images } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { UserProfile } from "./user-profile";
import { Credits } from "../credits";

export function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between border-b py-4">
      <Button asChild variant="ghost" className="rounded-full" size="icon">
        <Link href="/">
          <Images />
        </Link>
      </Button>

      <div className="flex items-center gap-4">
        <div>
          <Credits />
        </div>

        <UserProfile />
      </div>
    </nav>
  );
}
