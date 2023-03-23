import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Logo from 'assets/logo.png'


export default function Navbar() {

  const router = useRouter();
  const [navbar, setNavbar] = useState(false);

  const showMenu = () => {
    setmobileMenu((mobileMenu = !mobileMenu))
  }

  let NavData = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'About',
      href: '/about'
    },
    {
      name: 'Latest Hindi Songs',
      href: '/latest'
    },
   
    {
      name: 'Punjabi Songs',
      href: '/categories/punjabi'
    },
    // {
    //   name: 'Hindi Songs',
    //   href: '/categories/hindi'
    // },
    // {
    //   name: 'English Songs',
    //   href: '/categories/english'
    // }

  ]
  return (

    // new start
    <>
      <nav className="w-full bg-transparent">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
             <Link passHref href='/'> <Image width={64} height={64} src={Logo} alt='logo'/> </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg width="48px" height="48px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>Close</title><path d="M289.94,256l95-95A24,24,0,0,0,351,127l-95,95-95-95A24,24,0,0,0,127,161l95,95-95,95A24,24,0,1,0,161,385l95-95,95,95A24,24,0,0,0,385,351Z" fill="#fff" /></svg>
                  ) : (
                    <div className='space-y-2 lg:hidden block'>
                      <span className='block w-10 h-0.5 bg-shade-white/[0.9]'></span>
                      <span className='block w-8 h-0.5 bg-shade-white/[0.8]'></span>
                      <span className='block w-5 h-0.5 bg-shade-white/[0.7]'></span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {NavData.map((list, key) => (
                  <li key={key} >
                    <Link href={list.href}>
                      <a
                        aria-current='page'
                        className={
                          (router.pathname == list.href
                            ? 'text-white p-2 px-4 rounded-lg bg-white/[0.1] border-shade-white'
                            : '') +
                          'text-white opacity-80 transition duration-500'
                        }
                      >
                        {list.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
