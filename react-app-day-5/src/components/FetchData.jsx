import {useEffect, useState} from 'react'

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"

function FetchData() {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const response = await fetch(POSTS_URL);
        const data = await response.json()
        setPosts(posts)
        console.log(data);
    }

    useEffect(() => {
        getPosts()
    },[])
  return (
    <div>FetchData</div>
  )
}

export default FetchData