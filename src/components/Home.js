import React from "react";

function Home() {
  return (
    <header className="hero">
      <h1>Welcome to NETCAFE JKB</h1>
      <p>Where everyone can chill and sweat at the same time.</p>
      <button onClick={() => alert("Navigating to NETCAFE JKB Menu...")}>
        Discover More
      </button>
    </header>
  );
}

export default Home;
