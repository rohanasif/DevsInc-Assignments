import { useLoaderData } from "react-router-dom";
import Post from "../components/Post";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const posts = useLoaderData();
  console.log(posts, "posts");
  return (
    <>
    <h1>Posts</h1>
    <ul>
      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} />
      ))}
    </ul>
    </>
  );
}

export default Posts;

export async function loader() {
  try {
    const res = await fetch(POSTS_URL);
    const posts = await res.json();
    return posts;
  } catch (error) {
    console.log(error);
  }
}
