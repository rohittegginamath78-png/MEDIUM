import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Appbar = () => {
  const location = useLocation();
  const isLanding = location.pathname === "/";
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const nextDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
    setIsDark(nextDark);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-9xl px-6 py-4">
        <div
          className={[
            "flex items-center justify-between rounded-xl border px-4 py-2 backdrop-blur-md",
            isLanding
              ? "border-border/60 bg-background/30 text-text"
              : "border-border bg-surface/90 text-text",
          ].join(" ")}
        >
          <Link to="/" className="flex items-center gap-2">
            <div className="relative flex h-9 w-9 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-surface/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_15px_rgba(227,253,121,0.7)]" />
            </div>
            <span className="font-semibold text-lg">Blog Zone</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/blogs"
              className="text-muted hover:text-text text-sm transition"
            >
              Blogs
            </Link>

            <button
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text transition hover:bg-background"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>

            <Link
              to="/signin"
              className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-text transition hover:bg-background"
            >
              Sign in
            </Link>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text">
              B
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};