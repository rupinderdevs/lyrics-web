import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import PostSkelton from 'components/skelton/PostSkelton'
import PageHeader from 'components/PageHeader'
import Head from 'next/head'
import styles from 'styles/BlogPost.module.css'
import Link from 'next/link'

export async function getServerSideProps (context) {
  const { id } = context.params
  const loaddata = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/wp-json/wp/v2/posts?slug=${id}`
  )
  let data = loaddata?.data[0]

  return {
    props: {
      data   
    }
  }
}

export default function SinglePost ({ data }) {
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const { id } = router.query

  if (loading)
    return (
      <>
        <PostSkelton />
      </>
    )
  if (!data)
    return (
      <>
        <div className='px-40 py-20 bg-white rounded-md shadow-xl'>
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-tonez-blue text-9xl'>404</h1>

            <h6 className='mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl'>
              <span className='text-red-500'>Oops!</span> Post not found
            </h6>

            <p className='mb-8 text-center text-gray-500 md:text-lg'>
              The page you’re looking for doesn’t exist.
            </p>

            <Link
              href='/'
              className='px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100'
            >
              Go home
            </Link>
          </div>
        </div>
      </>
    )
  if (!loading) {
    return (
      <>
        <div className='grid grid-cols-2'>
<div>
        <PageHeader title={data.title.rendered.replace(/[^a-zA-Z ]/g, " ")} />

        <Head>
          <meta name='description' content="hello"/>
        </Head>

        <div className='m-10 text-center'>
          <div className='col-span-2 space-y-10'>
             
            <p className='text-shade-white text-xl font-normal'>
           <span className={styles.custom}  dangerouslySetInnerHTML={{ __html: data.content.rendered}} />
            </p>
      
          </div>
            </div>
          </div>
          

          {/* <div>
            dddddd
            dd
          </div> */}
          </div>
      </>
    )
  }
}
