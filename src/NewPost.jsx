import React from 'react'
import { useContext } from 'react'
import DataContext from './context/dataContext'
const NewPost = () => {
  const {handleSubmit} = useContext(DataContext);
  const {postBody} = useContext(DataContext);
  const {postTitle} = useContext(DataContext);
  const {setPostBody} = useContext(DataContext);
  const {setPostTitle} = useContext(DataContext);
  return (
   <main className='NewPost'>
    <h2>New Post</h2>
    <form
    className='newPostForm'
    onSubmit={handleSubmit}
    >
      <label htmlFor="postTitle">Title:</label>
      <input type="text"
      id="postTitle"
      placeholder='Title'
      required
      value={postTitle}
      onChange={(e)=>setPostTitle(e.target.value)}
      />
      <label htmlFor="postBody">Body</label>
      <textarea 
      id="postBody"
      placeholder='Title'
      required
      value={postBody}
      onChange={(e)=>setPostBody(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
   </main>
  )
}

export default NewPost
