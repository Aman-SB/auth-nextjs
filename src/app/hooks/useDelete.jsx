'use client'
import api from '@/utils/api';
import { useEffect, useState } from 'react';

const useDelete = (url) => {
    const [data,setData] = useState();
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState();

    useEffect(()=>{
        const deleteData = async () => {
            setLoading(true);
            try{
                const response = await api.delete(url , {withCredential : true});
                setData(response.data);
            }
            catch(error){
                setError(error);
            }
            finally{
                setLoading(false);
            }
        }

    },[url]);

    return {data , loading , error , deleteData};
}

export default useDelete;
