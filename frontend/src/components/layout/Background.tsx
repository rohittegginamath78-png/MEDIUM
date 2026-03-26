import { cn } from "@/lib/utils";

type BackgroundVariant = "hero" | "subtle";

type BackgroundProps = {
  variant?: BackgroundVariant;
  showImage?: boolean;
  imageUrl?: string;
  className?: string;
};

const DEFAULT_HERO_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80";

export const Background = ({
  variant = "subtle",
  showImage,
  imageUrl = DEFAULT_HERO_IMAGE,
  className,
}: BackgroundProps) => {
  const shouldShowImage = showImage ?? variant === "hero";

  return (
    <div className={cn("pointer-events-none fixed inset-0 z-0 overflow-hidden", className)}>
      {shouldShowImage && (
        <div
          className={cn(
            "absolute inset-0 bg-cover bg-center",
            variant === "hero" ? "brightness-75" : "brightness-90",
          )}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}

      <div
        className={cn(
          "absolute inset-0",
          variant === "hero" ? "bg-background/70" : "bg-background/88",
        )}
      />

      <div
        className={cn(
          "absolute inset-0 motion-safe:animate-[bg-float_16s_ease-in-out_infinite]",
          variant === "hero"
            ? "bg-[radial-gradient(80%_60%_at_20%_50%,rgba(163,230,53,0.18),transparent_60%)]"
            : "bg-[radial-gradient(70%_50%_at_20%_30%,rgba(163,230,53,0.10),transparent_65%)]",
        )}
      />
    </div>
  );
};

