import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <h1>Reacker News</h1>
      <nav>
        <Link to="/new">New</Link> | {" "}
        <Link to="/show">Show</Link> | {" "}
        <Link to="/ask">Ask</Link> | {" "}
        <Link to="/jobs">Jobs</Link>
      </nav>
    </main>
  );
};

export default App;