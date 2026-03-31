export const BlogcardSkeleton = () => {
  return (
    <div>
      <div>
        {/* container */}
        <div className=" mb-10 w-full max-w-4xl border border-border bg-surface p-6 rounded-xl ">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="h-16 w-16 shrink-0 rounded-full bg-white/10 animate-pulse"></div>

            {/* Text */}
            <div className="flex flex-col gap-4">
              <div className="h-4 w-20 bg-white/10 rounded animate-pulse"></div>
              <div className="h-4 w-28 bg-white/10   rounded animate-pulse"></div>
            </div>
          </div>
          <div className="h-4 w-2/4 bg-white/10 rounded mt-6 animate-pulse"></div>
          <div className="h-3 w-full bg-white/10 rounded mt-3 animate-pulse"></div>
          <div className="h-3 w-full bg-white/10 rounded mt-3 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
