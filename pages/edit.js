import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const edit = (props) => {
  const data = JSON.parse(props.data);
  const id = data;
  //   console.log(data)
  const FACEBOOK_BASE_API = "http://localhost:8080/api/v1/post";
  // const { id } = useParams(data);
  console.log(id);
  //   const navigate = useNavigate();

  const [post, setPost] = useState({
    id: id,
    // image: "",
    post: "",
    // time_stamp: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setPost({ ...post, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(FACEBOOK_BASE_API + "/" + id);
        setPost(response.data);
        console.log(post);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updatePost = async (e) => {
    e.preventDefault();
    await axios
      .put(FACEBOOK_BASE_API + "/" + id, post)
      .then((response) => {
        // window.history.back();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Post</h1>
        </div>
        <div className="items-center justify-center h-50 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Post
          </label>
          {/* <input
            name="post"
            value={post.post}
            onChange={(e) => handleChange(e)}
            type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input> */}
          <textarea
            name="post"
            value={post.post}
            onChange={(e) => handleChange(e)}
            type="text"
            className="h-40 w-96 border mt-2 px-2 py-2"
          ></textarea>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={updatePost}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
          >
            <Link href="/">Update</Link>
          </button>
          <button
            // onClick={() => navigate("/employeeList")}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
          >
            <Link href="/">Cancel</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

edit.getInitialProps = ({ query }) => {
  return { data: query.data };
};

export default edit;
