import React from "react";
import About from "./About";
import Login from "./Login";

function Home() {

  
  return (
    <div className="home">
      <h2>Welcome to Hanzi FlashCards</h2>
      <p>
        The it tool for studying and revising Chinese effectively with
        flashcards.{" "}
      </p>

    <Login />
    <About />
    </div>
  );
}

export default Home;
