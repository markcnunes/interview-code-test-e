import React from "react";
import heroImg from "../images/photo-1527529482837-4698179dc6ce.jpg";
import { Main, Sidebar } from "./";

const Page = () => {
  return (
    <div className="page">
      <div
        className="hero"
        role="banner"
        aria-label="Hero Image"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>
      <div className="container">
        <Main />
        <Sidebar />
      </div>
    </div>
  );
};

export default Page;
