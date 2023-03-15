import React, { useState, useEffect } from 'react'
import Layout from 'components/Layout'
import PageHeader from 'components/PageHeader'
import Posts from 'components/Posts'
import axios from 'axios'
import Pagination from 'components/Pagination'

export default function LatestPosts() {

  const [postData, setpostData] = useState([])
  const [postloading, setpostLoading] = useState(true)
  const [totalpages, setTotalpages] = useState(0)
  const [offsetValue, setOffsetValue] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 7

  const loadposts = async () => {
    setpostLoading((postloading = true))
    try {
      const loaddata = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/wp-json/wp/v2/posts?categories=13&per_page=${perPage}&offset=${offsetValue}`
        // /wp-json/wp/v2/posts?categories=13
        //  `${process.env.NEXT_PUBLIC_URL}/wp-json/wp/v2/posts?categories=1&per_page=${perPage}&offset=${offsetValue}`
      )
      // _fields=acf,source_url,title,slug
      setpostData((postData = loaddata?.data))
      setTotalpages((totalpages = loaddata?.headers['x-wp-totalpages']))
      setpostLoading((postloading = false))

      console.log('loadd+++++++++++++++++',postData);
    } catch (e) {
      console.log('error', e)
      setpostLoading((postloading = false))
    }
  }
  const onPageChange = activePage => {
    setCurrentPage((currentPage = activePage))
    setOffsetValue((offsetValue = (activePage - 1) * perPage))
    loadposts()
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    loadposts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Layout title='Latest Posts - Lyrics'>
        <div>
          <PageHeader title='Latest Songs' />
        </div>
        <div className='px-8'> 
          <Posts perPage={perPage} data={postData} loading={postloading} />
          </div>
        <div className='my-10'>
          <Pagination
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </div>
      </Layout>
    </>
  )
}
