import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../api";
type Blog = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  publishedAt: string | null; 
  author: {
    name: string | null;
  };
};
export const useBlogs=()=>{
    const [loading , setloading ] = useState(true);
    const [blogs , setblogs] = useState<Blog[]>([]);

    useEffect(()=>{
        api.get("blog/bulk").then(response =>{
            setblogs(response.data);
            setloading(false)
        })
    })
    return {
         blogs , loading
    }
} 