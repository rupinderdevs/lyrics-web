import Navbar from 'components/Navbar'
import 'styles/globals.css'
import Footer from 'components/Footer'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import NextNProgress from "nextjs-progressbar";

function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setloading] = useState(false)

  useEffect(() => {
    const handleStart = url => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setloading((loading = true))
    }
    const handleStop = () => {
      setloading((loading = false))
    }
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <>  

      
      <div className=''>
        <Navbar />
        <Head>
          <title>All Songs Lyrics</title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        
        </Head>
        <NextNProgress color="#c02026" />
        <Component key={router.asPath} {...pageProps} />       
      </div>
      {!loading ? <Footer /> : ''}
    </>
  )
}

export default MyApp
