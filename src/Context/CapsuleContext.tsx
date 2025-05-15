import React, { createContext,useState } from 'react'
import type { CapsuleTypes, ContextCapsule } from '../types'

export const CapsuleContext=createContext<ContextCapsule | null>(null)

export default function CapsuleProvider({children}:{children:React.ReactNode}) {

    const [data,setData] = useState <CapsuleTypes[] | null>(null)
    const [query,setQuery]=useState<string >("")

    const value:ContextCapsule={data, setData, query, setQuery}

     return (
    <CapsuleContext.Provider value={value}>
      {children}
    </CapsuleContext.Provider>
  );
}
