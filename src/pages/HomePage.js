import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import { Link } from 'react-router-dom';
import { booksData } from '../data/books';
import SearchBar from '../components/SearchBar';
import './Library.css';


const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(booksData.books);

  useEffect(() => {
    setFilteredBooks(
      booksData.books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="library-container">
      <Link to="/mylibrary">
        <button className="btn">My Library</button>
      </Link>
      <h1>Virtual Book Library</h1>
      <div className="search-bar">
        <SearchBar setSearchTerm={setSearchTerm} />
      </div>
      <BookList books={filteredBooks} />
    </div>
  );
};

export default HomePage;
