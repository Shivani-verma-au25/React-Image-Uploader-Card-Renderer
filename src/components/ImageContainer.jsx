import React from 'react'
import ImageCard from './ImageCard'

function ImageContainer({userdata,removeData}) {
  return (
    <div className='w-full h-screen flex justify-start flex-wrap gap-10 py-2 px-10  overflow-auto sm:px-3 sm:gap-14 md:gap-5 lg:overflow-auto' >
        {userdata.map((val,index) =>(
            <ImageCard val={val} key={index} index={index} removeData = {removeData}/>

        ))}
        
    </div>
  )
}

export default ImageContainer