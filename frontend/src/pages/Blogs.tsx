import { Blogcard } from "../components/Blogcard";
import { Appbar } from "../components/layout/Appbar";
import { useBlogs } from "../hooks";
export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <Appbar></Appbar>
      <div className="min-h-screen w-full  px-4 py-10">
        {blogs.map((blog) => (
          <Blogcard
            id={blog.id}
            title={blog.title}
            content={blog.content}
            authorname={blog.author?.name || "Anonymous"}
            publishedDate={"25 april 2024"}
          />
        ))}
      </div>
    </>
  );
};
