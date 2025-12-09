import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostFeed = () => {
  const { post: postDetails, postComments } = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <div aria-label="post details">
        <h2>{postDetails?.title}</h2>
        <p>{postDetails?.body}</p>
      </div>
      <ul>
        {postComments?.map((comment) => {
          return (
            <li>
              <p>Name: {comment.name}</p>
              <p>Email: {comment.email}</p>
              <p>{comment.body}</p>
            </li>
          );
        })}
      </ul>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export async function postDetailsLoader({ params }) {
  const id = params.id;

  const [post, postComments] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posdts/${id}`),
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
  ]);

  return {
    post: await post.json(),
    postComments: await postComments.json(),
  };
}

export default PostFeed;
