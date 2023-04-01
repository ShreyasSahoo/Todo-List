import React from 'react'
import {Link,useParams} from 'react-router-dom'
import { useContext } from 'react';
import DataContext from './context/dataContext';
const PostPage = () => {
  const{posts} = useContext(DataContext);
  const{handleDelete} = useContext(DataContext);
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id)
  return (
    <main className='PostPage'>
        <article className='post'>
          {
            post && 
            <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>
            <p className='postBody'>{post.body}</p>
            <button className ="deleteButton" onClick={()=> handleDelete(post.id)}>Delete Post</button>
            <Link to={`/edit/${post.id}`}><button className="editButton">Edit Post</button></Link>
            </>
          }
       
        {
          !post && 
          <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
              <Link to='/'>Visit Our Homepage</Link>
          </p>
      </>
        }
         </article>
    </main>
  )
}

export default PostPage