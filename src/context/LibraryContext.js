import React, { createContext, useState } from 'react';

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [library, setLibrary] = useState([]);

  const addToLibrary = (book) => {

    const existingBook = library.find((libBook) => libBook.id === book.id);
    if (!existingBook) {
        setLibrary((prevLibrary) => [...prevLibrary, book]);
    }
  };

  const removeFromLibrary = (id) => {
    setLibrary((prevLibrary) => prevLibrary.filter(book => book.id !== id));
  };

  return (
    <LibraryContext.Provider value={{ library, addToLibrary, removeFromLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};
