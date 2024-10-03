import React, { useContext } from 'react';
import { useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { LibraryContext } from '../context/LibraryContext';
import { booksData } from '../data/books';

import "./BookDetailsPage.css"

const BookDetailsPage = () => {
  const { id } = useParams();
  const book = booksData.books.find(b => b.id === Number(id));
  const { addToLibrary } = useContext(LibraryContext);
  

  const navigate = useNavigate();

    const handleAddToLibrary = () => {
    addToLibrary(book);
    navigate('/mylibrary'); 
    };


  return (
    <div className="container"> {/* Apply the container class */}
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      <p>Description: {book.description}</p>
      <p>Publication Year: {book.publication_year}</p>
      <button onClick={handleAddToLibrary}>Add to My Library</button>
    </div>
  );
};

export default BookDetailsPage;
