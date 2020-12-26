import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

const {CONTENT_API_KEY , API_URL} = process.env

export async function getStaticProps({params}) {

    // const res = await getPosts()
    // const posts = "";
    const res = await fetch(`${API_URL}/ghost/api/v3/content/posts/slug/${params.slug}/?key=${CONTENT_API_KEY}&fields=title,slug,html`).then((res) =>res.json())
    const post = res.posts[0]
    // // console.log(posts);
    return {
      props: {post}
    }
  }

  export async function getStaticPaths() {
    return {
      paths: [],
      // { params: { ... } } // See the "paths" section below
      fallback: true
    };
  }

function Post({post}) {

    // console.log(post);
    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div className={styles.container}>
            <Link href="/">
               <a> Go Back </a>
            </Link>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{__html:post.html}} className={styles.main} ></div>
        </div>
    )
}

export default Post