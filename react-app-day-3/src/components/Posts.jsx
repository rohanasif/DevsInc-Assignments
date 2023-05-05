import { useEffect, useState } from "react";
import axios from "axios";
export const name = "ahmed"
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState("1");
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [buttonId, setButtonId] = useState("1");



  //   useEffect(() => {
  //     axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
  //       console.log(response.data);
  //       setPosts(response.data);
  //     });
  //   }, []);

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((e) => {
        console.log(e)
    }).finally(() => {
        setLoading(false)
    })
  }, [buttonId]);

  return (
    <>
      {/* <h1>posts</h1> */}
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => setButtonId(id)}>fetch post</button>
      <h2>{post.title}</h2>
      {loading && <h1>loading...</h1>}
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </>
  );
}
