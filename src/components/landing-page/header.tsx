"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "~/lib/utils";
import { ModeToggle } from "../theme-toggle";
import { ContainerWrapper } from "../container-wrapper";
import { motion } from "framer-motion";
import { CircleX, MenuIcon } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { id: 1, label: "Features", href: "#features" },
  { id: 2, label: "Testimonials", href: "#testimonials" },
  { id: 3, label: "Pricing", href: "#pricing" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full backdrop-blur-md"
    >
      <ContainerWrapper className="relative flex items-center justify-between border-b px-10 py-4 xl:px-0">
        <Link href="/" className="text-2xl font-semibold">
          Thumb<span className="gradientText font-serif">Hero</span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {navLinks.map(({ id, label, href }) => (
            <Link
              key={id}
              href={href}
              className={cn(
                "text-md font-medium text-neutral-300 transition-colors hover:text-neutral-900 hover:dark:text-white",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-x-5">
          <ModeToggle />
          <Button
            size="sm"
            className="hidden text-sm font-semibold shadow-sm shadow-purple-500 transition-colors xl:block"
          >
            <Link href="/signup">Sign Up</Link>
          </Button>

          <Button
            size="icon"
            variant="ghost"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="rounded-lg border xl:hidden"
          >
            {isMenuOpen ? <CircleX /> : <MenuIcon />}
          </Button>

          <div>
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute right-10 top-20 z-50 flex min-w-[20rem] flex-col items-center gap-5 rounded-lg border p-5 shadow-md shadow-purple-500/40 backdrop-blur-sm xl:hidden"
              >
                {navLinks.map(({ id, label, href }) => (
                  <Link
                    key={id}
                    href={href}
                    className={cn("text-md font-medium")}
                  >
                    {label}
                  </Link>
                ))}
              </motion.nav>
            )}
          </div>
        </div>
      </ContainerWrapper>
    </motion.header>
  );
}
