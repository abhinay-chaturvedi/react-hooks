import React, { memo, useState } from 'react'




const InnerComponent = ({
  onClick
}: {
  onClick: (id: string) => void
}) => {
  
    console.log("inner component rendered")
    const [cnt, setCnt] = useState(0);
    let startTime = performance.now();
    let a = 0;
    while (performance.now() - startTime < 500) {
      // Do nothing for 500 ms to emulate extremely slow code
      a++;
    }
    console.log(a);
  return (
    <div className='border-[8px] border-[green] m-2'>
      <button className="p-3 m-2 shadow-md bg-slate-600 rounded-md" onClick={() => setCnt(cnt + 1)}>Change State</button>
      <span  className='bg-slate-400 p-3'>{cnt}</span>
    </div>
  )
}

export default memo(InnerComponent);