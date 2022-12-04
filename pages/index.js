// import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Home = () => {
	const [title, setTitle] = useState('Sidhu Moosewala'); // Stores the input title by the user, with the default value being "Alan Walker"
	const [searchResults, setSearchResults] = useState(null); // Stores the search results returned by the API
	const [lyrics, setLyrics] = useState(null); // Stores the lyrics returned by the API
	// const [song, setSongs] = useState();

	const getResults = async () => {
		try {
			const res = await axios.get('api/search/', {
				params: { title }
			});
			const { data } = res;
			setSearchResults(data.response.hits);
			console.log('getResults', data.response.hits);
		} catch (error) {
			console.error(error);
		}
	};

	const getLyrics = async id => {
		try {
			setSearchResults(null);
			const res = await axios.get('api/lyrics/', {
				params: { id }
			});
			const { data } = res;
			setLyrics(data.response.lyrics);
			console.log('getLyrics', data.response.lyrics);
		} catch (error) {
			console.error(error);
		}
	};


	return (

		<div className="flex flex-col justify-center py-2">
			<Head>
				<title>Lyrics Web</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>


			{/*  */}
			<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
				{/* title */}
				<h1 className="text-6xl font-bold text-primary mt-10">
					<span className="text-active">R</span> P
				
				</h1>
				<Link href="/alllyrics" className="text-6xl font-bold text-primary ">All Lyrics</Link>
		
				<h2 className="text-primary text-2xl font-light mt-6">
					Get the complete Lyrics of any given track.
				</h2>

				{/* form */}

				<form
					className="sm:mx-auto mt-20 justify-center sm:w-full sm:flex"
					onSubmit={e => {
						getResults();				
						e.preventDefault();
						e.stopPropagation();
					}}
				>
					<input
						type="text"
						className="flex w-full sm:w-1/3 rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
						placeholder="Enter a track or artist name eg: Sidhu Moosewala"
						onChange={e => {
							setTitle(e.target.value);
							setSearchResults(null);
							setLyrics(null);
						}}
					/>
					<div className="mt-4 sm:mt-0 sm:ml-3">
						<button
							className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:text-active hover:bg-primary sm:px-10"
							type="submit"
						>
							Search
						</button>
					</div>
				</form>
				{/* form end */}
				{searchResults && (
					<div className="mt-10">
						<div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
							{searchResults.map(song => (
								<div key={song.result.id} className="pt-6">
									<div className="flow-root bg-light rounded-lg px-4 pb-8">
										<div className="-mt-6">
											<div className="flex items-center justify-center">
												<span className="p-2">
													<img
														src={
															song.result
																.song_art_image_thumbnail_url
														}
														className="w-full h-full rounded-lg"
														alt={
															song.result
																.song_art_image_thumbnail_url
														}
													/>
												</span>
											</div>
											<div className="text-center justify-center items-center">
												<h3 className="mt-4 text-lg font-bold w-full break-words overflow-x-auto text-primary tracking-tight">
													{song.result.title}
												</h3>
												<span className="mt-2 text-sm text-secondary block">
													{song.result.artist_names}
												</span>
												<button
													className="mt-5 text-md text-active"
													onClick={() => {
														getLyrics(song.result.id);
													}}
												>
													Get Lyrics &rarr;
												</button>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				)}
				{/* other section */}
				{lyrics && (
					<div className="mt-10 max-w-2xl">
						<h2 className="text-2xl font-bold text-center text-active">
							Lyrics for {lyrics.tracking_data.title}
						</h2>
						<p className="mt-6 leading-loose text-primary text-xl">
							{lyrics.lyrics.body.plain}
						</p>
					</div>
				)}

				{/*  */}
			</div>
		</div>
	)
}

export default Home
