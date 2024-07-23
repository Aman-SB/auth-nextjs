'use client'
import api from "@/utils/api";
import { useCallback, useState } from "react";

const usePost = (url) => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const postData = useCallback(async (body) => {
        setLoading(true);
        try {
          const response = await api.post(url, body, { withCredentials: true });
          setData(response.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }, [url]);

    return {data , loading , error , postData};
}

export default usePost;