import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Background } from "./Background";

type LayoutProps = {
  children: ReactNode;
  variant?: "hero" | "subtle";
  className?: string;
  contentClassName?: string;
};

export const Layout = ({
  children,
  variant = "subtle",
  className,
  contentClassName,
}: LayoutProps) => {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full bg-background",
        variant === "hero" ? "overflow-hidden" : "overflow-x-hidden",
        className,
      )}
    >
      <Background variant={variant} />
      <main className={cn("relative z-10 min-h-screen", contentClassName)}>{children}</main>
    </div>
  );
};

