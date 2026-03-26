import type { Blog } from "../hooks";
import { Appbar } from "./layout/Appbar";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="min-h-screen bg-background text-text">
      <Appbar />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 py-24 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-extrabold leading-tight mb-4">
            {blog.title}
          </h1>

          <p className="text-muted text-sm mb-6">
            Posted on {blog.publishedAt || "Unknown date"}
          </p>

          <div className="text-lg text-text leading-relaxed space-y-4">
            {blog.content}
          </div>
        </div>

        <div className="h-fit rounded-2xl border border-border bg-surface p-6">
          <p className="text-muted text-sm mb-3">Author</p>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background text-lg font-bold text-text">
              {blog.author?.name?.[0] || "A"}
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                {blog.author?.name || "Anonymous"}
              </h3>

              <p className="text-muted text-sm">Writes amazing blogs 🚀</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
