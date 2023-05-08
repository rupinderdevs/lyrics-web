import GroupPost from "components/GroupPost";
import Layout from "components/Layout";
import Posts from "components/Posts";
import React, { useState } from "react";
import axios from "axios";
import Hero from "components/hero-section";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Head from "next/head";

const Home = ({ data, postData }) => {
  // const [loading, setLoading] = useState(false)
  const [postloading, setpostLoading] = useState(false);

  return (
    <>
      <NextSeo
        title={"Home - " + process.env.NEXT_PUBLIC_SITE_NAME}
        description={`Access largest songs lyrics collection with ${process.env.NEXT_PUBLIC_SITE_NAME} Now.`}
        canonical={process.env.NEXT_PUBLIC_DOMAIN_URL}
        openGraph={{
          title: "All Songs Lyrics" + process.env.NEXT_PUBLIC_SITE_NAME,
          description: `Find latest songs lyrics`,
          siteName: process.env.NEXT_PUBLIC_SITE_NAME,
        }}
      />
      <Head>
        <title>All Songs Lyrics</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="noindex,nofollow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
        <link rel="canonical" href="https://www.songslyricsaz.com/" />
      </Head>
      <div>
        <Layout title="All Songs Lyrics">
          <div>
            <Hero />
            <div className="md:w-auto md:container md:mx-auto px-4">
              {/* <GroupPost
                loading={loading}
                data={data}
                numberCols='3'
                seeAllbtn /> */}
              <Posts
                data={data}
                loading={postloading}
                title="Latest Punjabi Songs"
              />
              <Link passHref href="/punjabi">
                <span className="cursor-pointer bg-shade-red/[.30] text-white mx-auto w-full md:w-1/3 my-4 block text-center px-10 py-4 rounded-full">
                  {" "}
                  View All
                </span>
              </Link>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  // pbi songs
  const { data: loadData } = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/wp-json/wp/v2/posts?categories=14&per_page=6`
  );
  const data = loadData || [];

  return {
    props: { data },
    revalidate: 1000,
  };
};

// export async function getStaticProps() {
//   const { data: loadData } = await axios.get(
//     `${process.env.NEXT_PUBLIC_URL}/wp-json/wp/v2/posts?categories=13&per_page=9&per_page=6`
//   );

//   const { data: loadPostData } = await axios.get(
//     `${process.env.NEXT_PUBLIC_URL}/wp-json/wp/v2/posts?categories=14&per_page=6`
//   );

//   const postData = loadPostData || [];
//   const data = loadData || [];

//   return {
//     props: { data, postData },
//     revalidate: 1000,
//   };
// }

export default Home;
