import { signOut } from "~/server/auth";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import { LogOut } from "lucide-react";

export async function Signout() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
        toast.success("Log out successfull!!");
        redirect("/");
      }}
    >
      <Button type="submit" variant="link">
        Log Out
        <LogOut />
      </Button>
    </form>
  );
}
