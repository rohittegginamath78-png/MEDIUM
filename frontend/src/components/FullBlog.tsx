import type { Blog } from "../hooks";
import { Appbar } from "./layout/Appbar";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Appbar />

      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT - BLOG CONTENT */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-extrabold leading-tight mb-4">
            {blog.title}
          </h1>

          <p className="text-gray-500 text-sm mb-6">
            Posted on {blog.publishedAt || "Unknown date"}
          </p>

          <div className="text-lg text-gray-800 leading-relaxed space-y-4">
            {blog.content}
          </div>
        </div>

        {/* RIGHT - AUTHOR CARD */}
        <div className="bg-white p-6 rounded-2xl shadow-md h-fit">
          <p className="text-gray-500 text-sm mb-3">Author</p>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-lg font-bold">
              {blog.author?.name?.[0] || "A"}
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                {blog.author?.name || "Anonymous"}
              </h3>

              <p className="text-gray-500 text-sm">Writes amazing blogs 🚀</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
