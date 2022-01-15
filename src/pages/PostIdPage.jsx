import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const res = await PostService.getOneById(params.id);
    setPost(res.data);
  });
  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const res = await PostService.getCommentsByPostId(params.id);
    setComments(res.data);
  });
  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);
  return (
    <div>
      <h1>Open details from page {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}, {post.title}
        </div>
      )}
      <h1>Comments</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((com) => (
            <div style={{marginTop: '15px'}} key={com.id}>
              <h5>{com.email}</h5>
              <div>{com.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
