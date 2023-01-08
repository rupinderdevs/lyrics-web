import Link from 'next/link'
import React from 'react'

export default function Footer () {
 
  return (
    <footer className='py-2 text-center'>
     <p className='text-center text-white md:w-auto md:container md:mx-auto md:px-12 px-4'>
     @copyright 2023 All rights reserved - <Link href={"/"}>songslyricsaz.com</Link>   </p> 
    </footer>
  )
}
