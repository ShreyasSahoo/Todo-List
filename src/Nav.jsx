import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from './context/dataContext'
const Nav = () => {
  const {search} = useContext(DataContext)
  const {setSearch} = useContext(DataContext)
  return (
    <nav className='Nav'>
      <form className='searchForm' onSubmit={e=>e.preventDefault()}>
        <label htmlFor="search" >Search Posts</label>
        <input type="text" 
        id="search"
        value={search}
        placeholder="Search Posts"
        onChange={(e)=>setSearch(e.target.value)}       
        />
      </form>
      <ul>
      <li><Link to="/">Home</Link></li>
           <li><Link to="/post">Post</Link></li> 
           <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
