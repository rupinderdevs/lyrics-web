import React from 'react'

export default function SinglePostPage () {
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
      <div className='pt-10 lg:p-10 animate-pulse space-y-10'>
        <div className='bg-gray-300 w-full h-10 rounded-[50px] col-span-2'></div>
        <div className="flex justify-between">
        <div className='bg-gray-300 w-40 h-16 rounded-[50px] col-span-2'></div>
        <div className='bg-gray-300 w-32 h-16 rounded-[50px] col-span-2'></div>
        </div>
        
        <div className='animate-pulse h-full w-full'>
          <div className='flex flex-col space-y-3 items-center'>
            <div className='w-full bg-gray-300 h-8 rounded-md '></div>
            <div className='w-full bg-gray-300 h-8 rounded-md '></div>
            <div className='w-full bg-gray-300 h-8 rounded-md '></div>
       
            <div className='w-1/2 bg-gray-300 h-6 rounded-md '></div>
          </div>
        </div>
      </div>
    </>
  )
}
