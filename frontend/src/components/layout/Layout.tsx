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
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-20 border-b border-border/70 bg-background/80 shadow-[0_10px_24px_-16px_rgba(0,0,0,0.45)] backdrop-blur-md" />
      <main
        className={cn(
          "relative z-10 min-h-screen",
          variant === "hero" ? "pt-0" : "pt-20",
          contentClassName,
        )}
      >
        {children}
      </main>
    </div>
  );
};

