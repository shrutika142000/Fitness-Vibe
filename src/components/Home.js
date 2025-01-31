import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <header id="home" className="home-section text-center">
      <div className="overlay">
        <h1 className="display-4">Welcome to Fitness Vibe</h1>
        <p id="home-color">Transform your body, mind, and life.</p>
        <a href="#features" className="btn btn-primary btn-lg">
          Explore Features
        </a>
      </div>
    </header>
  );
};

export default Home;
