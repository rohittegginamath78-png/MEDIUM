import { Blogcard } from "../components/Blogcard";
import { Appbar } from "../components/layout/Appbar";
import { useBlogs } from "../hooks";
export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return <div className="min-h-screen bg-background text-text p-8">Loading...</div>;
  }
  return (
    <>
      <Appbar></Appbar>
      <div className="min-h-screen w-full bg-background px-4 py-24">
        <div className="mx-auto mb-6 w-full max-w-xl">
          <h1 className="text-3xl font-bold text-text">Latest Blogs</h1>
          <p className="mt-2 text-muted">Fresh writing from the Blog Zone community.</p>
        </div>
        <div className="space-y-4">
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
