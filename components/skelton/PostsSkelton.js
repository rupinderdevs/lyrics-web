import React from 'react'

export default function PostsSkelton ({ title,perPage = 4 }) {
  return (
    <>
      <div className='text-center my-10 md:my-20 text-shade-white'>
        <span className='text-3xl md:text-5xl font-bold uppercase'>
          {title}
        </span>
      </div>
      <div className='grid lg:grid-cols-3 gap-10 mb-10 animate-pulse'>
        {Array.from({ length: perPage }).map((value, index) => {
          return (
            <div
              key={index}
              className='border-2 border-white rounded-xl p-4 space-y-10'
            >
              <div className='bg-gray-300 w-full h-[200px] rounded-xl col-span-2'></div>
              <div className='text-shade-white space-y-4'>
                <div className='w-full bg-gray-300 h-6 rounded-md'></div>
                <div className='w-44 bg-gray-300 h-6 rounded-md '></div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
