import React from 'react';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/sign-up">Click me</Link>
    </div>
  );
}

export default Index;
