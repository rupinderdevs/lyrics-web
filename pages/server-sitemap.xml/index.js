import axios from "axios";
import { getServerSideSitemap } from "next-sitemap";

// export const getServerSideProps = async (ctx) => {
//     const perPage = 100; // number of posts per page
//     let currentPage = 1; // start with the first page
//     let allPosts = []; // an array to store all posts

//     while (true) {
//         // try {
//             const response = await axios.get(
//                 `${process.env.NEXT_PUBLIC_URL}/wp-json/wp/v2/posts?_fields=slug,date&per_page=${perPage}&page=${currentPage}`
//             );
//             if (response) {
//                 const posts = response.data;
//                 if (posts.length === 0) {
//                     // if there are no more posts, break the loop
//                     break;
//                 }
//                 allPosts = [...allPosts, ...posts]; // add the new posts to the array
//                 // console.log("posts====> sitemap", posts)
//                 currentPage++; // move to the next page
//             } else {
//                 break;
//             }

//         // } catch (error) {
//             break;
//         // }
//     }
//     const newsSitemaps = allPosts.map(item => ({
//         loc: `${process.env.NEXT_PUBLIC_SITE_NAME}/${item.slug}`,
//         lastmod: new Date(item.date).toISOString()
//     }));

//     return getServerSideSitemap(ctx, newsSitemaps);
// };
// export default function Site() {}

export const getServerSideProps = async (ctx) => {
  const perPage = 100; // number of posts per page
  let currentPage = 1; // start with the first page
  let allPosts = []; // an array to store all posts

  try {
    // while (true) {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/wp-json/wp/v2/posts?_fields=slug,date&per_page=${perPage}&page=${currentPage}`
    );
    if (response.status === 200) {
      const posts = response.data;
      if (posts.length === 0) {
        // if there are no more posts, break the loop
        // break;
      }
      allPosts = [...allPosts, ...posts]; // add the new posts to the array
      currentPage++; // move to the next page
    } else {
      throw new Error(`Failed to fetch posts with status ${response.status}`);
    }
    // }

    const newsSitemaps = allPosts.map((item) => ({
      loc: `${process.env.NEXT_PUBLIC_SITE_NAME}/${item.slug}`,
      lastmod: new Date(item.date).toISOString(),
    }));

    return getServerSideSitemap(ctx, newsSitemaps);
  } catch (error) {
    console.error(error);
    return {
      notFound: true, // return a 404 error page
    };
  }
};
