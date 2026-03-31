import type { Blog } from "../hooks";
import { Heart, MessageCircle, Bookmark, Share2 } from "lucide-react";

type FullBlogProps = {
  blog?: Blog;
};

export const FullBlog = ({ blog }: FullBlogProps) => {
  const authorName = blog?.author.name || "Anonymous";

  const publishedAt = blog?.publishedAt
    ? new Date(blog.publishedAt).toDateString()
    : "Unknown date";

  return (
    <div className="ml-64 pt-24 px-6">
      <div className="mx-auto max-w-2xl">
        {/* AUTHOR SECTION */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 flex items-center justify-center rounded-full border border-border bg-surface text-text font-semibold">
              {authorName[0]}
            </div>

            <div>
              <p className="text-text font-medium">{authorName}</p>
              <p className="text-sm text-muted">{publishedAt}</p>
            </div>
          </div>

          {/* FOLLOW BUTTON (optional UI touch) */}
          <button className="px-4 py-1.5 text-sm rounded-full border border-border bg-surface hover:bg-primary hover:text-background transition">
            Follow
          </button>
        </div>
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-text mb-6">
          {blog?.title}
        </h1>
        {/* SUB INFO */}
        <div className="flex items-center gap-4 text-sm text-muted mb-10">
          <span>{Math.ceil((blog?.content.length || 0) / 100)} min read</span>
          <span>•</span>
          <span>Published</span>
        </div>
        {/* DIVIDER */}
        <div className="border-t border-border mb-10" />
        {/* CONTENT */}
        <article className="text-lg leading-8 text-muted space-y-6">
          {blog?.content?.split("\n").map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </article>
        {/* BOTTOM ACTIONS */}
        <div className="mt-12 pt-6 border-t border-border flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-6 text-muted text-sm">
            <button className="flex items-center gap-2 hover:text-primary transition cursor-pointer">
              <Heart size={18} />
              <span>Like</span>
            </button>

            <button className="flex items-center gap-2 hover:text-primary transition cursor-pointer">
              <MessageCircle size={18} />
              <span>Comment</span>
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6 text-muted text-sm">
            <button className="flex items-center gap-2 hover:text-primary transition cursor-pointer">
              <Bookmark size={18} />
              <span>Save</span>
            </button>

            <button className="flex items-center gap-2 hover:text-primary transition cursor-pointer">
              <Share2 size={18} />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
