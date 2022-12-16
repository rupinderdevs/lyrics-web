// import type { NextPage } from 'next'
import Head from 'next/head'
// import { useState } from 'react';
// import axios from 'axios';
// import { NextPage } from 'next';
// import Link from 'next/link';
import BreadCrumb from 'components/breadcrumb';

export default function Home({ data }) {

    return (
<>
        
            <Head>
                <title>Lyrics Web</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <BreadCrumb/> */ }
            <div className="py-20 pb-4 lg:pb-10 px-4 md:px-8 xl:px-16 grid grid-cols-1 md:grid-cols-2 gap-16">

               
                {data.map((post, index) => {
                
                let today = new Date(post['date']).toLocaleDateString();
                return <div key={index}>

                    <img className="w-full rounded-2xl" src={post['_embedded']['wp:featuredmedia'][0]['source_url']} width={post['_embedded']['wp:featuredmedia'][0]['media_details']['width']} alt={post['_embedded']['wp:featuredmedia'][0]['alt_text']} />
                    {/* <h3 className='font-medium text-xl my-3'> {post['title']['rendered'].replace(/[^a-zA-Z ]/g, " ")}</h3> */}
                    <span className='text-gray-500 my-5 text-center block'>Publihed on : {today}</span>
                    <div className='custom' dangerouslySetInnerHTML={{ __html: post['content']['rendered'] }} />                                     
                    </div>
                    

                })}
              
                
                    </div>

          
            </>
    )
}



export const getServerSideProps = async (content) => {
    const URL = `https://lyricsworldyou.com`;

    const { id } = content.params;
    // const getPosts = await fetch(`https://www.alldesilyrics.com/wp-json/wp/v2/posts?_embed&slug=${id}`);
    // const getPosts = await fetch(`https://99lyricstore.com/wp-json/wp/v2/posts?_embed&slug=${id}`);
    const getPosts = await fetch(`${URL}/wp-json/wp/v2/posts?_embed&slug=${id}`);


    const data = await getPosts.json();
    return { props: { data } }
}
