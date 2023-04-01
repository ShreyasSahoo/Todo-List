import React from 'react'
import Post from './Post'
import { useContext } from 'react'
import DataContext from './context/dataContext'
const Feed = () => {
  const {searchResults} = useContext(DataContext);
  return (
    <>
    {
        searchResults.map(post=>{
          return (
        <Post key={post.id} post={post} />
          )
    })
    }
    </>
    
  )
}

export default Feed
