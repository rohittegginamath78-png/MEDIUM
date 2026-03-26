import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";

export const Blog = () => {
  const { id } = useParams();
  if (!id) {
    return <div className="min-h-screen p-8 text-text">Invalid blog</div>;
  }
  const { loading, blog } = useBlog({
    id: id 
  });

  if (loading || !blog) {
    return <div className="min-h-screen p-8 text-text">Loading...</div>;
  }
  return ( 
    <FullBlog blog={blog}/>
    )
};
