import { useState,useEffect } from "react";
import axios from "axios";

function useFetchApi(url){
    const[data,setData]=useState([])
    const[error,setError]=useState(null)
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        const fetchData=async(url)=>{
            try{
                await axios.get(url).then(response => setData(response.data))
            }
            catch(err){
                setError(err.message)
                setData([])
            }
            finally{
                setTimeout(()=>setLoading(false),2000)
            }
        }

        fetchData(url)
        
    },[url])

    return {data,error,loading}
}

export default useFetchApi;