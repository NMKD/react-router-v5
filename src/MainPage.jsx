import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/users">Users list</Link>
    </>
  );
};

export default MainPage;
