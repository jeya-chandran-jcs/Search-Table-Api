export type CapsuleMisson={
    name:string,
    flight:number
}

export type CapsuleTypes={
    capsule_serial: string,
    capsule_id: string,
    status: string,
    original_launch: string | null,
    original_launch_unix: number | null,
    missions:CapsuleMisson[],
    landings: number,
    type: string,
    details: string | null,
    reuse_count: number

}


export type ContextCapsule={
    data:CapsuleTypes[]  | null,
    setData:React.Dispatch<React.SetStateAction<CapsuleTypes[] | null>>,
    query:string,
    setQuery:React.Dispatch<React.SetStateAction<string >>
}