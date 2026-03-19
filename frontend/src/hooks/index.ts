import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../api";

export const useBlogs=()=>{
    const [loading , setloading ] = useState(true);
    const [blogs , setblogs] = useState([]);

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