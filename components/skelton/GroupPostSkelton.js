import React from 'react'

export default function GroupPostSkelton({ title, numberCols = 3, perPage }) {
  return (
    <>
      <div className='text-center my-10 md:my-20 text-shade-white'>
        <span className='text-3xl md:text-5xl font-bold uppercase'>
          {title}
        </span>

        <div className={`text-left my-10 md:my-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-${numberCols} gap-8`}>
          {
            Array.from({ length: perPage }).map((value, index) => {
              return <div key={index} className='flex items-center  space-x-4 py-6 md:py-10 px-14 md:px-20 border-2 border-dashed border-white rounded-[100px] hover:bg-white/[.10] transition duration-300'>
                <div className='flex animate-pulse flex-row items-center h-full justify-center space-x-5'>
                  <div className='w-12 bg-gray-300 h-12 rounded-full '></div>
                  <div className='flex flex-col space-y-3'>
                    <div className='w-36 bg-gray-300 h-6 rounded-md '></div>
                    <div className='w-24 bg-gray-300 h-6 rounded-md '></div>
                  </div>
                </div>
              </div>
            })
          }

        </div>
      </div>
    </>
  )
}
