import GroupPost from 'components/GroupPost'
import Layout from 'components/Layout'
import Posts from 'components/Posts'
import React, { useState } from 'react'
import axios from 'axios'
import Hero from 'components/hero-section'
import Link from 'next/link'

const Home = ({ data, postData }) => {    
  const [loading, setLoading] = useState(false)
  const [postloading, setpostLoading] = useState(false)

  return (
    <div>
      <Layout title='Best Songs Lyrics'>
        <div>
          <Hero/>
      <div className='md:w-auto md:container md:mx-auto px-4'>
          
          <GroupPost
            loading={loading}
            data={data}
            title='Top Previous'
            numberCols='3'
            seeAllbtn
          />
          <Posts data={postData} loading={postloading} title='Latest songs lyrics'/>
          <Link href='/latest'>
          <a className='bg-shade-red/[.30] text-white mx-auto w-1/3 my-4 block text-center px-10 py-4 rounded-full'>
            View All          </a>
        </Link>
        </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps () {
  const loadData = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/wp-json/wp/v2/media?_fields=source_url,title,id,date,slug&per_page=9&per_page=6`
  )
  const loadPostData = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/wp-json/wp/v2/posts?_fields=acf,source_url,title,id,date,slug&per_page=6`
  )
  let postData = loadPostData?.data || []
  let data = loadData?.data || []
  return {
    props: { data, postData },
    revalidate: 1000
  }
}

export default Home
