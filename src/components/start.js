import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <Container>
      <header className="App-header">
        <p>Another Implementation Obviously</p>
      </header>
      <main>
        <p>Roger's Indicator of Multiple Intelligences</p>
        <Link to="/question/1">Start</Link>
      </main>
    </Container>
  );
};

export default Start;
