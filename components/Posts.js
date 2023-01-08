import React, { useState } from 'react'
import PostsSkelton from './skelton/PostsSkelton'
import Link from 'next/link'
import Image from 'next/image'
import Music from 'assets/images/music.png'

export default function Posts({ data, loading, title, perPage }) {

  // console.log('daaataa+____', data.title);
  if (loading)
    return (
      <>
        <PostsSkelton perPage={perPage} title={title} />
      </>
    )


  return (
    <>
      <div className='text-center my-10 md:my-20 text-black'>
        <span className='text-3xl text-white xl:text-4xl font-bold uppercase'>
          {title}
        </span>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mb-10'>
        {data.map((d, key) => {
          let today = new Date(d['date']).toLocaleDateString();
        //   if(d.featured_media === 0 || d._embedded['wp:featuredmedia'][0].media_details === undefined){
        //     imageSource = null;
        // }
        // else{
        //     imageSource = d._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
        // }
          //  let URLIMAGE = d['_embedded']['wp:featuredmedia'][0]['source_url'];



          return (
            // eslint-disable-next-line @next/next/link-passhref
            <Link key={key} href={`/latest/${d.slug}`}>

              <div className="card bg-white/[.10]  rounded-xl p-6 space-y-4">
                <Image class="rounded-xl " src={Music} height={280} width={500} alt="music" />  
               
                {/* <img src={imageSource} alt="music"/>  */}
                
           
                {/* <Image class="rounded-xl " src={Music} height={280} width={500} alt="music" /> */}
                <div id="description" className="space-y-4">
                  <a href="#">
                    <h2 className="text-white font-semibold text-xl transition hover:text-cyan-300">
                      {/* {d.title} */}
                      {d['title']['rendered'].replace(/[^a-zA-Z ]/g, " ")}
                    </h2>
                  </a>

                  <div className="flex items-center justify-between font-semibold text-sm border-b border-slate-500 pb-6">
                    <span
                      id="price"
                      className="text-white flex justify-between items-center"
                    >

                      Published on:
                    </span >
                    <span className="text-slate-500 flex justify-between items-center select-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {today}
                    </span>
                  </div>
                </div>
              </div>


            </Link>
          )
        })}
      </div>
      {/* <Link href='/posts'>
          <a className='bg-shade-red/[.30] text-white mx-auto w-1/3 my-4 block text-center px-10 py-4 rounded-full'>
            Latest Lyrics
          </a>
        </Link> */}
    </>
  )
}
