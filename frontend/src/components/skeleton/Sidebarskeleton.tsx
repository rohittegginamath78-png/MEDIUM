export function SidebarSkeleton() {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 rounded-xl bg-surface border-r border-border flex flex-col justify-between p-4 animate-pulse">
      
      {/* TOP */}
      <div>
        <div className="h-5 w-28 bg-neutral-quaternary rounded mb-6"></div>

        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3 px-2 py-2">
              <div className="h-5 w-5 bg-neutral-quaternary rounded"></div>
              <div className="h-4 w-20 bg-neutral-quaternary rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="h-5 w-5 bg-neutral-quaternary rounded"></div>
        <div className="h-4 w-20 bg-neutral-quaternary rounded"></div>
      </div>
    </aside>
  );
}