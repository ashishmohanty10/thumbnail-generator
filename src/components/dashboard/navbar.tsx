import { Images } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { UserProfile } from "./user-profile";

export function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between py-4">
      <Button asChild>
        <Link href="/">
          <Images />
        </Link>
      </Button>

      <div className="flex items-center gap-4">
        <div>
          <p>1 Credit</p>
        </div>

        <Button>Buy Credits</Button>

        <UserProfile />
      </div>
    </nav>
  );
}
