import React from "react";
import Feed from "./Feed";
import { useContext } from 'react';
import DataContext from './context/dataContext';
const Home = () => {
const {searchResults} =useContext(DataContext);
const {fetchError} =useContext(DataContext);
const {isLoading} =useContext(DataContext);

  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {fetchError && <p style={{color:'red'}} className="statusMsg">{fetchError}</p>}
      {!fetchError&&!isLoading&&(searchResults.length ? (
      <Feed />
      ) : (
        <p style={{ marginTop: "2rem" }}>No posts to display...</p>
      ))}
    </main>
  );
};

export default Home;
