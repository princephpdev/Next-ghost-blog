import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const {CONTENT_API_KEY , API_URL} = process.env

// const posts = "";

// async function getPosts(){
//   const res = await fetch(`${API_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug`)
//               .then((res) => res.json())
//   const posts = res.posts
//   // const posts = res.posts.map((post) => post)
//   return posts
//       // console.log(posts)
// }

export async function getStaticProps() {

  // const res = await getPosts()
  // const posts = "";
  const res = await fetch(`${API_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug`).then((res) =>res.json())
  const posts = res.posts
  // // console.log(posts);
  return {
    props: {posts}
  }
}

function Home({posts}) {
  return (
    <div className={styles.container}>
      <h1>Hello Friends</h1>
      <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/posts/${encodeURIComponent(post.slug)}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Home
