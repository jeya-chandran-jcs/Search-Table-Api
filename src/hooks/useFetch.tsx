import  { useContext, useEffect, useState } from 'react'
import type { CapsuleTypes } from '../types'
import { CapsuleContext } from '../Context/CapsuleContext'

export default function useFetch(url:string) {
    const [resData,setResData]=useState<CapsuleTypes[] | CapsuleTypes | null>(null)
    const [loading,setLoading]=useState<boolean>(false)
    const context = useContext(CapsuleContext);

    if (!context) {
    throw new Error("useFetch must be used within a CapsuleProvider");
    }

    const { setData, query } = context;
   
    console.log(query,"query from fetch")


   
    useEffect(()=>{
    const fetchData=async()=>{
        try{
            setLoading(true)
            const res=await fetch(url)
            const response:CapsuleTypes[]=await res.json()

            const queryInLower=query.trim().toLowerCase()
            let filteredData: CapsuleTypes[]

              if(queryInLower)
            {
                filteredData=response.filter((capsule)=> Object.values(capsule).some((value=>String(value).toLowerCase().includes(queryInLower)))
            ) 
            }
            else{
                filteredData=response
            }

                setTimeout(()=>{
                    setResData(filteredData)
                    setData(filteredData)
                    setLoading(false)
                },500)

           
            setLoading(false)
        }
        catch(err){
            setLoading(false)
            console.error(err)
        }
    }
    fetchData()
    },[url,query])

    return {resData,setResData,loading}
}
