import { Link } from "react-router-dom";

export const Appbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-9xl px-6 py-4">
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 backdrop-blur-md px-4 py-2">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="relative flex h-9 w-9 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-white/10" />
              <div className="h-2.5 w-2.5 rounded-full bg-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.8)]" />
            </div>
            <span className="font-semibold text-lg">Blog Zone</span>
          </Link>

          {/* Right */}
          <div className="flex items-center gap-6">
            <Link
              to="/blogs"
              className="text-white/70 hover:text-white text-sm transition"
            >
              Blogs
            </Link>

            <Link
              to="/signin"
              className="rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur hover:bg-white/20 transition"
            >
              Sign in
            </Link>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white">
              B
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};