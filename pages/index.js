// import type { NextPage } from 'next'
import Head from 'next/head'
// import { useState } from 'react';
// import axios from 'axios';
// import { NextPage } from 'next';
import Link from 'next/link';
import Hero from 'components/hero-section';

export default function Home({ data }) {
   
    return (
        <>
            <Head>
                <title>Lyrics Web</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero />

            <div className="max-w-6xl mx-auto px-4 xl:px-0">
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
                    {data.map((post, index) => {
                        return <Link href={`/post/${post['slug']}`} key={index}>

                            <div className="h-full bg-gray-100 flex justify-center items-center">
                                <div className="container flex justify-center">
                                    <div className="max-w-sm">
                                        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                                            <img
                                                className="w-full rounded-t-lg"
                                                src={post['_embedded']['wp:featuredmedia'][0]['source_url']} width="100%" alt="song"

                                            />
                                            <div className="p-2 sm:py-6 sm:px-8 rounded-lg bg-white">
                                                <h1 className="text-gray-700 font-semibold text-sm xl:text-lg mb-3 hover:text-gray-900 hover:cursor-pointer">
                                                    {post['title']['rendered'].replace(/[^a-zA-Z ]/g, " ")}
                                                </h1>                                             
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Link>


                    })}

                </div>
                <button className="flex justify-center items-center mx-auto mt-6 py-4 px-8 font-bold rounded-lg shadow-lg">
                    Load More
                </button>
            </div>
        </>
    )
}

export const getServerSideProps = async () => {
    const URL = `https://lyricsworldyou.com`;
    const getPosts = await fetch(`${URL}/wp-json/wp/v2/posts?_embed&per_page=27`);
    const data = await getPosts.json();
    return { props: { data } }
}