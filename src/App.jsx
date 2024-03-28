import React, { useState } from 'react'
import ImageContainer from './components/ImageContainer'
import Form from './components/Form'

function App() {
  const [userdata ,setUserData] = useState([])

  const formDatasubmit = (data) =>{
    setUserData([...userdata,data])
  }

  const removeData = (delid) =>{
    setUserData(userdata.filter((item,index) => index != delid))
  }

  return (
    <div className='w-full h-screen bg-zinc-200 '>
      <Form formDatasubmit ={formDatasubmit}  />
      <ImageContainer userdata={userdata} removeData = {removeData} />
    </div>
  )
}

export default App