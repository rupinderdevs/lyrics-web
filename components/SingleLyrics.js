/* eslint-disable @next/next/link-passhref */
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Music from 'assets/logo.png'
import Image from 'next/image'


const SingleLyrics = ({ title, id, Url, date, slug ,showNumber }) => {  
  const wrapperRef = useRef(null)


 

  return (
    <div
      ref={wrapperRef}
      className='flex items-center space-x-4 py-6 md:py-6 px-8 md:px-10 border-1 bg-white/[.10]  hover:bg-white/[.10] transition duration-300'
    >
      <div className=' flex items-center justify-center w-10'>
      <Image className="rounded-xl " src={Music} height={100} width={100} alt="music" />  
        
      </div>
      <Link href={`/latest/${slug}`}>
        <div className='cursor-pointer'>
          <p className='text-lg font-semibold capitalize'>
            {showNumber?title:title.substring(3).replace(/_|-/g,' ')}            
          </p>
          
          <span>Upload at {date.substring(0, 10)}</span>
        </div>
      </Link>
    </div>
  )
}

export default SingleLyrics
