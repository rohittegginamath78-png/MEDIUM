import { useEffect, useState } from "react";
import { api } from "../api";
export type Blog = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  publishedAt: string | null;
  author: {
    name: string | null;
  };
};
export const useBlogs = () => {
  const [loading, setloading] = useState(true);
  const [blogs, setblogs] = useState<Blog[]>([]);

  useEffect(() => {
    api.get("blog/bulk").then((response) => {
      setblogs(response.data);
      setloading(false);
    });
  }, []);
  return {
    blogs,
    loading,
  };
};
export const useBlog = ({ id }: { id: string }) => {
  const [loading, setloading] = useState(true);
  const [blog, setblog] = useState<Blog>();

  useEffect(() => {
    if (!id) return;
    console.log("Route ID :", id);

    api.get(`blog/${id}`).then((response) => {
      setblog(response.data);
      setloading(false);
    });
  }, [id]);
  return {
    blog,
    loading,
  };
};
