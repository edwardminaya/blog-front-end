import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function PostsShowPage() {
  const [post, setPost] = useState({});
  const params = useParams();

  const handleShowPost = () => {
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then((response) => {
      setPost(response.data);
    });
  };

  useEffect(handleShowPost, []);

  return (
    <div id="posts-show">
      <div>
        <h4>{post.title}</h4>
      </div>
      <div>
        <h4>{post.body}</h4>
      </div>
      <div>
        <img src={post.image} />
      </div>
    </div>
  );
}
