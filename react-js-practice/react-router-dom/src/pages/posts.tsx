import React from "react";
import { Link, useLoaderData } from "react-router-dom";

interface PostDto {
  id: number;
  title: string;
  body: string;
}

const posts = () => {
  const posts: PostDto[] = useLoaderData();

  return (
    <div className="posts">
      {posts.map((post) => {
        const { id, title, body } = post;

        return (
          <div className="post" key={id}>
            <h2>{title}</h2>
            <p className="post_body">{body}</p>

            <Link to={`/posts/${id}`}>View Post</Link>
          </div>
        );
      })}
    </div>
  );
};

export async function postLoader() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=20"
  );

  return await response.json();
}

export default posts;
