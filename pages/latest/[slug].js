import React from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import PageHeader from 'components/PageHeader';
import PostSkelton from 'components/skelton/PostSkelton';
import styles from 'styles/BlogPost.module.css';

export async function getStaticPaths() {
  const perPage = 100; // number of posts per page
  let currentPage = 1; // start with the first page
  let allPosts = []; // an array to store all posts

  while (true) {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/wp-json/wp/v2/posts?_fields=slug,date&per_page=${perPage}&page=${currentPage}`
      );

      if (response) {
        const posts = response.data;

        if (posts.length === 0) {
          // if there are no more posts, break the loop
          break;
        }

        allPosts = [...allPosts, ...posts]; // add the new posts to the array
        console.log('allPosts===', allPosts);
        currentPage++; // move to the next page
      } else {
        break;
      }
    } catch (error) {
      break;
    }
  }

  const paths = allPosts.map((item) => `/latest/${item.slug}`);
  console.log("paths>>>>", paths)
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/wp-json/wp/v2/posts?slug=${slug}`
  );
  const data = response?.data[0] || null;
  return { props: { data } };
}

export default function SinglePost({ data }) {
  if (!data) {
    return (
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-tonez-blue text-9xl">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-red-500">Oops!</span> Post not found
          </h6>

          <p className="mb-8 text-center text-gray-500 md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>

          <Link
            href="/"
            className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
          >
            Go home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{data.title.rendered.replace(/[^a-zA-Z ]/g, ' ')}</title>
        <meta name="description" content="songs lyrics" />
      </Head>

      <PageHeader title={data.title.rendered.replace(/[^a-zA-Z ]/g, ' ')} />

      <div className="p-4 text-center">
        <div className="text-shade-white text-xl font-normal">
          <p
            className="pb-8 md:px-24"
            dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}
          />

          <span
            className={styles.custom}
            dangerouslySetInnerHTML={{ __html: data.content.rendered }}
          />
        </div>
      </div>
    </>
  );
}
