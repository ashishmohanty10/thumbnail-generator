import { signOut } from "~/server/auth";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";

export async function Signout() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
        redirect("/");
      }}
    >
      <Button type="submit" variant="link">
        Sign Out
      </Button>
    </form>
  );
}
