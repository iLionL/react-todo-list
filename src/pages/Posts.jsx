import React, { useEffect, useState } from "react";
import PostService from '../API/PostService';
import Pagination from '../components/pagination/Pagination';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import Loader from '../components/UI/Loader/Loader';
import MyModal from '../components/UI/modal/MyModal';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import { getPageCount } from "../utils/pages";
import "../styles/App.css";



function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts =usePosts (posts, filter.sort, filter.query);
  const [fetchPosts, isPostLoading, posrtError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <MyButton onClick={() => fetchPosts()}>Get posts</MyButton>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create some notes
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      {/* <hr style={{ margin: "15px 0" }} /> */}
      <PostFilter filter={filter} setFilter={setFilter} />
      {posrtError && <h1>Some error {posrtError}</h1>}
      {isPostLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={"Cписок постов"}
        />
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
