// import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import axios from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';
import Hero from 'components/hero-section';

export default function Home({ data }) {
	console.log('data++', data);
	// const [title, setTitle] = useState('Sidhu Moosewala'); // Stores the input title by the user, with the default value being "Alan Walker"
	// const [searchResults, setSearchResults] = useState(null); // Stores the search results returned by the API
	// const [lyrics, setLyrics] = useState(null); // Stores the lyrics returned by the API

	const [More, setMore] = useState();

	return (
		<>
			<Head>
				<title>Lyrics Web</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero />

			<div className="max-w-6xl mx-auto py-20 px-8 md:px-8">
				<div className='grid grid-cols-3 gap-6 w-full'>
					{data.map((post, index) => {
						return <Link href={`/post/${post['slug']}`}>

							<div key={index} className="h-full bg-gray-100 flex justify-center items-center">
								<div className="container flex justify-center">
									<div className="max-w-sm">
										<div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
											<img
												className="w-full rounded-t-lg"
												src={post['_embedded']['wp:featuredmedia'][0]['source_url']} width="100%" alt="song"

											/>
											<div className="py-6 px-8 rounded-lg bg-white">
												<h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
													{post['title']['rendered'].replace(/[^a-zA-Z ]/g, " ")}
												</h1>
												<button className="mt-6 py-2 px-4 bg-yellow-400 text-red-800 font-bold border-red-900 rounded-lg shadow-md hover:shadow-lg transition duration-300">
													Get Lyrics
												</button>
											</div>
											{/* <div className="absolute top-2 right-2 py-2 px-4 !bg-white rounded-lg">
          <span className="text-md">$150</span>
        </div> */}
										</div>
									</div>
								</div>
							</div>

						</Link>

						
					})}
					
				</div>
				<button className="flex justify-center items-center mx-auto mt-6 py-2 px-4 font-bold rounded-lg shadow-md hover:shadow-lg">
           Load More
          </button>
			</div>
		</>
	)
}



export const getServerSideProps = async () => {
	const getPosts = await fetch(`https://www.alldesilyrics.com/wp-json/wp/v2/posts?_embed`);
	const data = await getPosts.json();
	
	return { props: { data } }
	// try {
	// 	const getPosts = await axios({
	// 		method: "GET",
	// 		url: "https://www.alldesilyrics.com/wp-json/wp/v2/posts?_embed",
	// 	});
	// 	if (res && res.data) {
	// 		setdata(res.data);
	// 	}
	// 	console.log("response----", res.data);            
	// } catch (error) {
	// 	console.log(error);
	// }
}