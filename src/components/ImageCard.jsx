import React from 'react'

function ImageCard({val,index ,removeData}) {
    // console.log(val);
  return (
    <div className='w-[80vw] px-2 py-3 rounded-3xl sm:w-[40vw] sm:h-[50vw] md:w-[25vw] md:h-[40vw] lg:w-[18vw]'>
        <div className="image-div w-full h-[60vw] overflow-hidden sm:w-full sm:h-[37vw] md:w-full md:h-[20vw] ">
            <img className='w-full h-full object-cover rounded-t-3xl' src={val.pic} alt="" />
        </div>
        <div className="detail w-full  bg-slate-600 flex justify-between px-3 items-center py-4 rounded-b-3xl"> 
            <h2 className='text-white font-semibold '>{val.heading}</h2>
            <button onClick={()=>removeData(index)} className='px-5 py-1 bg-red-600 text-white rounded-md tracking-tight'>Remove</button>
        </div>
    </div>
  )
}

export default ImageCard