import React, { useContext, useState } from 'react'
import { CapsuleContext } from '../Context/CapsuleContext'

export default function Header() {

    const context=useContext(CapsuleContext)
    if(!context) throw new Error("data will be added soon for header")
    const {query,setQuery,setData,data}=context
    const [show,setShow]=useState<boolean>(false)

    const handleSort=(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        setShow(!show)
        setData(data ? [...data].reverse() : [])
       
    }

  return (
    <div className='flex justify-around items-center my-4'>
        
        <div>
            <h1 className='font-bold text-2xl drop-shadow-lg text-blue-400'>SpaceXData</h1>
        </div>
        
        <div className='flex flex-column items-center gap-3'>
            
            <div className='group border-2 border-gray-400 rounded-lg px-4 py-2  hover:border-blue-400 transition-hover duration-300 ease-in-out '>
                <i className="fa-solid fa-magnifying-glass text-gray-600 group-hover:text-blue-400"></i>
                <input name="search" value={query} onChange={(e)=>setQuery(e.target.value)} className='focus:outline-none pl-2 pr-1 font-semibold text-lg' placeholder='ex:C101,unknown'/>    
            </div>
            
            <div className='flex gap-2'>
                <button className='bg-gray-600 px-3 py-2 rounded-md' onClick={handleSort}>
                    {show ? 
                    <i className="text-white fa-solid fa-up-long hover:text-blue-400"></i>
                    :    
                    <i className="text-white fa-solid fa-down-long hover:text-blue-400"></i>
                }
                    </button> 
            </div>
        </div>
    </div>
  )
}
