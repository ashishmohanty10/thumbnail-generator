import React from "react";
import { cn } from "~/lib/utils";

export function ContainerWrapper({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto max-w-[80rem]", className)}>{children}</div>
  );
}
