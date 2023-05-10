import { useLoaderData, useNavigate } from "react-router-dom";

function Post() {
   const navigate = useNavigate()
  const post = useLoaderData();
  console.log(post);
  return (
    <>
      <h2>{post.title}</h2>
      <h4>{post.body}</h4>
      <button onClick={() => navigate("/add-post")}>Add Post</button>
    </>
  );
}

export default Post;

export async function loader(request) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${request.params.id}`
    );
    const post = await res.json();
    return post;
  } catch (e) {
    console.log(e);
  }
}
