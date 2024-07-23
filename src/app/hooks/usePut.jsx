'use client'
import api from "@/utils/api";
import { useState ,  useCallback } from "react";

const usePut = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const putData = useCallback(async (body) => {
      setLoading(true);
      try {
        const response = await api.put(url, body, { withCredentials: true });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }, [url]);
  
    return { data, loading, error, putData };
  };
  
  export default usePut;