import { useContext} from 'react'
import { API } from '../globalApi'
import { CapsuleContext } from '../Context/CapsuleContext'
import useFetch from '../hooks/useFetch'

export default function Table() {
    const context=useContext(CapsuleContext)
    if(!context) throw new Error("data will be fetched soon for table")
        const {data}=context
    const {loading}=useFetch(API)
    // useEffect(()=>{
    //     resData
    // },[data])
    // console.log(resData?.length>0 ? resData : "loading")
  return (
    <table className='w-[95%] border-collapse border-2 border-gray-400 rounded-md mx-auto px-4 py-3 group' >
        <thead className='bg-blue-300 '>
            <tr className=''>
                <th>s.no</th>
                <th>Capsule Serial</th>
                <th>Mission</th>
                <th>Details</th>
                <th>original Launch</th>
                <th>original Launch unix</th>
                <th>Landings</th>
                <th>Reuse Count</th>
                <th>Status</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody className=''>
           {loading ? <div className='min-h-screen bg-gray-200 flex justify-center items-center'>Loading</div> : 
            Array.isArray(data) &&  data.map((item,index)=>(
                <tr key={index} className='hover:bg-blue-100 px-3 broder-r border-black'>
                    <td className='text-center'>{index+1}</td>
                    <td className='text-center'>{item.capsule_serial}</td>
                    <td className='text-center'>{item.missions.length>0 ?
                    <> 
                        <span className='text-center'>name: {item?.missions?.[0]?.name || "Unknown"}</span> <span>flight: {item?.missions?.[0]?.flight || "Unknown"}</span>
                    </> : "Unknown"}</td>
                    <td className='text-center'>{item?.details ? item.details : "Unknown"}</td>
                    <td className='text-center'>{item?.original_launch ? new Date(item.original_launch).toLocaleString() : "Unknown"}</td>
                    <td className='text-center'>{item?.original_launch_unix ? item.original_launch_unix : "Unknown"}</td>
                    <td className='text-center'>{item.landings}</td>
                    <td className='text-center'>{item.reuse_count}</td>
                    <td className='text-center'>{item.status}</td>
                    <td className='text-center'>{item.type}</td>
                </tr>
         ))
           }
        </tbody>
    </table>
  )
}
