import React, { useContext } from "react";
import Feed from "./Feed";
import DataContext from "./context/DataContext";

const Home = () => {
  const{posts,error,loading,searchList}=useContext(DataContext)
  return (
    <main>
      {loading ? (
        <p className="text-warning col-12 text-center mt-3 h2">Loading ...</p>
      ) : posts.length && error === null ? (
        <Feed posts={searchList} />
      ) : error !== null ? (
        <p className="text-danger text-center h2">{error}*</p>
      ) : (
        <p className="text-center mt-2 h2">No data found !</p>
      )}
    </main>
  );
};

export default Home;
