import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LibraryContext } from '../context/LibraryContext';

import "./Library.css"

const MyLibraryPage = () => {
  const { library, removeFromLibrary } = useContext(LibraryContext);

  return (
    <div className="library-container">
      <h1>My Library</h1>
      <Link to="/">
        <button className="btn">Home</button>
      </Link>
      {library.length === 0 ? (
        <p>Your library is empty.</p>
      ) : (
        library.map(book => (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <button onClick={() => removeFromLibrary(book.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default MyLibraryPage;
