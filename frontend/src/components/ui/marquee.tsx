import * as React from "react";

import { cn } from "@/lib/utils";

export type MarqueeProps = {
  className?: string;
  children: React.ReactNode;
  pauseOnHover?: boolean;
  repeat?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export function Marquee({
  className,
  children,
  pauseOnHover = false,
  repeat = 2,
  ...props
}: MarqueeProps) {
  const items = Array.from({ length: Math.max(1, repeat) });

  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden",
        pauseOnHover && "[&_[data-marquee-track]]:group-hover:[animation-play-state:paused]",
        className,
      )}
      {...props}
    >
      <div
        data-marquee-track
        className="flex w-max shrink-0 animate-marquee items-center [gap:var(--gap,2rem)]"
      >
        {items.map((_, idx) => (
          <React.Fragment key={idx}>{children}</React.Fragment>
        ))}
      </div>
    </div>
  );
}

