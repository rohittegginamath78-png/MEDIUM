import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchBar } from "../ui/Searchbar";

export const Appbar = () => {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
    setIsDark(nextDark);
  };

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl px-4 py-3 backdrop-blur-md border bg-surface/80 border-border">

  {/* LEFT */}
  <Link to="/blogs" className="flex items-center gap-2 shrink-0">
    <div className="relative flex h-9 w-9 items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-surface/70" />
      <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(227,253,121,0.5)]" />
    </div>
    <span className="font-semibold text-lg">Blog Zone</span>
  </Link>

  {/* CENTER (Search - FIXED WIDTH + CENTERED) */}
  {!isLanding && (
    <div className="flex-1 flex justify-center">
      <div className="w-full max-w-lg">
        <SearchBar />
      </div>
    </div>
  )}

  {/* RIGHT */}
  <div className="flex items-center gap-3 shrink-0">
    
    <Link
      to="/create-blog"
      className="rounded-full bg-primary px-4 py-1.5 text-sm text-background hover:scale-105 transition"
    >
      Create
    </Link>

    {!isLanding && (
      <button
        onClick={toggleTheme}
        className="h-9 w-9 flex items-center justify-center rounded-full border border-border bg-surface hover:bg-[#2a2a2a]"
      >
        {isDark ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    )}

    <Link
      to="/signin"
      className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm hover:bg-[#2a2a2a]"
    >
      Sign in
    </Link>

    <div className="h-9 w-9 flex items-center justify-center rounded-full border border-border bg-surface">
      B
    </div>

  </div>
</div>
  );
};
