"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "~/lib/utils";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../theme-toggle";
import { ContainerWrapper } from "../container-wrapper";
import { motion } from "framer-motion";

const navLinks = [
  {
    id: 1,
    label: "Features",
    href: "#features",
  },

  {
    id: 2,
    label: "Testimonials",
    href: "#testimonials",
  },

  {
    id: 3,
    label: "Pricing",
    href: "#pricing",
  },
];

export function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full backdrop-blur-md"
    >
      <ContainerWrapper className="flex items-center justify-between border-b py-4">
        <Link href="/" className="text-2xl font-semibold">
          Thumb<span className="gradientText font-serif">Hero</span>
        </Link>

        <nav className="flex items-center gap-5">
          {navLinks.map((links) => (
            <ul
              key={links.id}
              className={cn(
                "text-md font-medium text-neutral-300 transition-colors hover:text-neutral-900 hover:dark:text-white",
                links.href === pathname && "border-b",
              )}
            >
              <Link href={links.href}>{links.label}</Link>
            </ul>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <ModeToggle />
          <Button
            size="sm"
            className="text-sm font-semibold shadow-sm shadow-purple-500 transition-colors"
          >
            <Link href="/signup">SignUp</Link>
          </Button>
        </div>
      </ContainerWrapper>
    </motion.header>
  );
}
