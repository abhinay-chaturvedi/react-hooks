"use client"

import React, { useCallback, useState } from 'react'
import InnerComponent from './InnerComponent'

const OuterComponent = ({
  id
}: {
  id: string
}) => {
  const [theme, setTheme] = useState("dark");
  const handleSumbit = useCallback((id: string) => {
    console.log(id)
  }, [id])

  // const cached = useCallback(handleSumbit, []);
  console.log("outer component render")
  return (
    <div className={`${theme=="dark"?"bg-red-950": "bg-red-50"} w-full h-full`}>
      <button className='p-3 m-2 shadow-md bg-slate-600 rounded-md' onClick={() => setTheme((prev) => prev=="dark"?"light":"dark")}>Change theme</button>
      {/* {children} */}
      <InnerComponent onClick = {handleSumbit}/>
    </div>
  )
}

export default OuterComponent