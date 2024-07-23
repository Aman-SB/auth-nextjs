'use client'

import api from "@/utils/api";
import { useState } from "react";
import { useEffect } from "react";


const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
``
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await api.get(url , {withCredential : true});
                setData(response.data);
            }
            catch(error){
                setError(error);
            }
            finally{
                setLoading(false);
            }
        }
        fetchData();
    },[url]);

    return {data , loading , error};
}

export default useFetch;