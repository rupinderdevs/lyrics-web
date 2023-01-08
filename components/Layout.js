import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

const Layout = ({
  children,
  title = 'AZ Songs Lyrics',
  description = `We've rounded up some of the best songs lyrics.`
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content={description} />

      <meta property='og:type' content='website' />
      <meta name='og:title' property='og:title' content={title} />
      <meta name='og:description' property='og:description' content={description} />
      <meta property='og:site_name' content='songs lyrics' />
      <meta property='og:url' content='' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content='' />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:site' content='' />
      <meta name='twitter:creator' content='' />
      <meta property='og:image' content='' />
      <meta name='twitter:image' content='' />
    </Head>
    <motion.main
      initial='pageInitial'
      animate='pageAnimate'
      variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        }
      }}
    >
      {children}
    </motion.main>
  </div>
)

export default Layout
