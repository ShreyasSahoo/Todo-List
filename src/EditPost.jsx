import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import DataContext from "./context/dataContext";
const EditPost = () => {
  const {posts} = useContext(DataContext)
  const {handleEdit} = useContext(DataContext)
  const {editTitle} = useContext(DataContext)
  const {setEditTitle} = useContext(DataContext)
  const {editBody} = useContext(DataContext)
  const {setEditBody} = useContext(DataContext)
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post]);
  return (
    <main className="NewPost">
      {editTitle && (
        <>
          <h2>Update Post</h2>
          <form className="newPostForm" onSubmit={e=>e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input
              type="text"
              id="postTitle"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Body</label>
            <textarea
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type="submit" onClick={()=>handleEdit(post.id)}>Submit</button>
          </form>
        </>
      )}
      {
        !editTitle &&
          <>
        <h3>Post Not Found </h3>
        <p>
          <Link to="/">Visit Our HomePage</Link>
        </p></>

      }
    </main>
  );
};

export default EditPost;
