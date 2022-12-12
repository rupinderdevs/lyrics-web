// import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import axios from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';

export default function Home({ data }) { 
    return (

        <div className="max-w-6xl mx-auto py-20 px-8 md:px-8 grid grid-cols-2">
            <Head>
                <title>Lyrics Web</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* breadcrumb */}
  


            {/*  */}
            {data.map((post, index) => {
                let today = new Date(post['date']).toLocaleDateString();

                return <div key={index}>

                    <img className="w-full rounded-2xl" src={post['_embedded']['wp:featuredmedia'][0]['source_url']} width={post['_embedded']['wp:featuredmedia'][0]['media_details']['width']} alt={post['_embedded']['wp:featuredmedia'][0]['alt_text']}/>
                    <h3 className='font-medium text-xl my-3'> {post['title']['rendered'].replace(/[^a-zA-Z ]/g, " ")}</h3>
                    <span className='text-gray-500 mb-20'>Publihed on : {today}</span>
                    <span dangerouslySetInnerHTML={{ __html: post['content']['rendered'] }} />

                </div>
            })}

        </div>
    )
}



export const getServerSideProps = async (content) => {
    const { id } = content.params;
    const getPosts = await fetch(`https://www.alldesilyrics.com/wp-json/wp/v2/posts?_embed&slug=${id}`);
    const data = await getPosts.json();  
    return { props: { data } }
}