import Link from 'next/link'
import React from 'react'

export default function Footer () {
 
  return (
    // flex flex-col md:flex-row justify-center md:justify-between items-center
    <footer className='py-2 gap-4 text-center'>
     <p className='text-white md:px-12 px-4 text-center'>
        @copyright 2023 All rights reserved - <span className='text-white hover:text-shade-red font-semibold transition-all duration-500'> <a href={"/"}>songslyricsaz.com</a> </span>  </p> 
      
      {/* <div className='text-white flex gap-8'>
        <Link href={'/'}>
        Privacy Policy
        </Link>
        <Link href={'/'}>
        Disclaimer
        </Link>
        <Link href={'/'}>
      Contact Us
        </Link>
      </div> */}
    </footer>
  )
}
