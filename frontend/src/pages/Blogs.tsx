import { Blogcard } from "@/components/Blogcard";
import { Appbar } from "@/components/layout/Appbar";
import { Blogskeleton } from "@/components/skeleton/Blogskeleton";
import { SidebarSkeleton } from "@/components/skeleton/Sidebarskeleton";
import { Sidebar } from "@/components/ui/sidebar";
import { useBlogs } from "@/hooks";
export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <>
        <Appbar />
        <SidebarSkeleton />
        <div className="ml-80 pt-24 px-6 space-y-6">
          {/* Top Section */}
          <div className="max-w-full ">
            <div className="w-56 h-6 mb-4 bg-white/10 rounded-full animate-pulse"></div>

            <div className="h-2 mb-2 w-72 bg-white/10 rounded-full animate-pulse"></div>
            <div className="h-2 mb-2 w-72 bg-white/10 rounded-full animate-pulse"></div>
          </div>
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Blogskeleton key={i} />
            ))}
        </div>
      </>
    );
  }

  return (
    <>
      <Appbar />
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="ml-80 pt-24 px-6">
        {" "}
        {/* 👈 KEY FIX */}
        {/* HEADER */}
        <div className="mb-6 max-w-3xl">
          <h1 className="text-3xl font-bold text-text">Latest Blogs</h1>
          <p className="mt-2 text-muted">
            Fresh writing from the Blog Zone community.
          </p>
        </div>
        {/* BLOG LIST */}
        <div className="flex flex-col space-y-6">
          {blogs.map((blog) => (
            <Blogcard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              content={blog.content}
              authorname={blog.author?.name || "Anonymous"}
              publishedDate={"25 april 2024"}
            />
          ))}
        </div>
      </div>
    </>
  );
};
