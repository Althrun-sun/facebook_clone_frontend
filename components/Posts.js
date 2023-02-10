import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllPost, selectPost } from "../public/src/features/postSlice";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);
  // const [posts_list, setPosts_list] = useState(posts);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get("http://localhost:8080/api/v1/post")
        .then((response) => {
          console.log(response.data)
          dispatch(addAllPost(response.data));
        });
    };
    fetchData();
  }, []);

  const removeElementById=(list, id) =>{
    return list.filter(function(dictionary) {
      return dictionary.id !== id;
    });
  }

  const deletePost = (e, id) => {
    e.preventDefault();
    console.log("get delete request");
    console.log(id);
    axios.delete("http://localhost:8080/api/v1/post" + "/" + id).then((res) => {
      if (posts) {
        window.location.reload();
      }
    });
  };

  return (
    <div>
      {posts.map((post) => (
        <Post deletePost={deletePost} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
