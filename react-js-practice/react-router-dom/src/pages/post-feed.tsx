import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const PostFeed = () => {
  const { id } = useParams();

  const fetchPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    fetchPost();
  }, [id]);

  return (
    <div>post-feed {id}</div>
  )
}

export default PostFeed;