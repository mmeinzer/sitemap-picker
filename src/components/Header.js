import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-dark mb-12">
      <div className="container h-12 mx-auto flex">
        <Link className="my-auto no-underline" to="/">
          <h1 className="text-lg font-sans text-white">Anchor Float</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
