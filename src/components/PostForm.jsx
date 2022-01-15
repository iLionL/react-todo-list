import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
  const [onePost, setOnePost] = useState({
    title: "",
    body: "",
  });

  function addNewPost(e) {
    e.preventDefault();
    const newPost ={ ...onePost, id: Date.now()}
    create(newPost)
    setOnePost({title: "", body: ""});
  }
  return (
    <form>
      <MyInput
        value={onePost.title}
        onChange={(e) => setOnePost({ ...onePost, title: e.target.value })}
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        value={onePost.body}
        onChange={(e) => setOnePost({ ...onePost, body: e.target.value })}
        type="text"
        placeholder="Описание поста"
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
