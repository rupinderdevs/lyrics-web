import React from 'react'

export default function PostSkelton () {
  return (
    <>
      <div className='flex justify-center w-full border-2 border-dashed border-white rounded-[50px] md:rounded-[100px] text-shade-white py-16 md:py-28 px-10 text-center'>
        <div className='flex animate-pulse flex-row items-center h-full'>
          <div className='flex flex-col space-y-3 items-center'>
            <div className='w-40 lg:w-96  bg-gray-300 h-10 rounded-md '></div>
            <div className='w-28 lg:w-44 bg-gray-300 h-6 rounded-md '></div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center space-y-10 m-10'>
        <div className='bg-gray-300 w-full h-40 lg:h-96 rounded-[50px] col-span-2'></div>
        {/* <div className='bg-gray-300 w-full h-96 rounded-[50px] hidden lg:block'></div> */}
        <div className='animate-pulse h-full w-full space-y-10 col-span-2'>
          <div className='flex flex-col space-y-3 justify-center items-center'>
            <div className='w-full bg-gray-300 h-8 rounded-md '></div>
            <div className='w-44 bg-gray-300 h-6 rounded-md '></div>
          </div>
          <div className='flex flex-col space-y-3 justify-center items-center'>
            <div className='w-full bg-gray-300 h-8 rounded-md '></div>
            <div className='w-44 bg-gray-300 h-6 rounded-md '></div>
          </div>
          <div className='flex flex-col space-y-3 justify-center items-center'>
            <div className='w-full bg-gray-300 h-8 rounded-md '></div>
            <div className='w-44 bg-gray-300 h-6 rounded-md '></div>
          </div>
          <div className='flex flex-col space-y-3 justify-center items-center'>
            <div className='w-full bg-gray-300 h-8 rounded-md '></div>
            <div className='w-44 bg-gray-300 h-6 rounded-md '></div>
          </div>

          <div className='flex flex-col space-y-3 justify-center items-center'>
            <div className='w-full bg-gray-300 h-8 rounded-md '></div>
            <div className='w-44 bg-gray-300 h-6 rounded-md '></div>
          </div>
        </div>
        {/* <div className='bg-gray-300 w-full h-96 rounded-[50px] hidden lg:block'></div> */}
      </div>
    </>
  )
}
