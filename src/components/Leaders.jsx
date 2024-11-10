import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar';

const Leaders = () => {
  return (
    <div className=' bg-[#fff] min-h-[100vh]'>
     <h1 className="text-center text-2xl font-bold mb-4">Leaders</h1>
    
     <div className="flex flex-col justify-center items-center  p-2 mb-10">

<div className=''>
<div className="w-96 mb-10 ">
        <div className="flex p-2">
          <img
              src='./src/assets/users/img-5.png'
            alt="Profile"
            className="object-cover w-8 h-8 rounded-full mr-2"
          />
          <p>user 1</p>
        </div>
        <ProgressBar completed={80} bgColor="#2896b2" animateOnRender={true} />
</div>
<div className="w-96 mb-10">
        <div className="flex p-2">
          <img
              src='./src/assets/users/img-5.png'
            alt="Profile"
            className="object-cover w-8 h-8 rounded-full mr-2"
          />
          <p>user 1</p>
        </div>
        <ProgressBar completed={95} animateOnRender={true} />
</div>
<div className="w-96 mb-10">
        <div className="flex p-2">
          <img
              src='./src/assets/users/img-5.png'
            alt="Profile"
            className="object-cover w-8 h-8 rounded-full mr-2"
          />
          <p>user 1</p>
        </div>
        <ProgressBar completed={70} bgColor="#b22a28" animateOnRender={true} />
</div>
</div>
</div>

    
    </div>
  )
}

export default Leaders;