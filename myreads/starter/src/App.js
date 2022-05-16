import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getAll } from "./BooksAPI";
import Shelves from "./Views/Shelves";
import Search from "./Views/Search";

function App() {
  const [books, setBooks] = useState([]);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const books = await getAll();
      setBooks(books);
    };

    getBooks();
  }, []);

  useEffect(() => {
    setRead(books.filter((book) => book.shelf === "read"));
    setCurrentlyReading(
      books.filter((book) => book.shelf === "currentlyReading")
    );
    setWantToRead(books.filter((book) => book.shelf === "wantToRead"));
  }, [books, books.length]);

  function updateBooks(book) {
    setBooks([...books.filter((b) => b.id !== book.id), book]);
  }

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Shelves
            updateBooks={updateBooks}
            books={books}
            currentlyReading={currentlyReading}
            wantToRead={wantToRead}
            read={read}
          />
        }
      />
      <Route
        path="/search"
        element={<Search updateBooks={updateBooks} books={books} />}
      />
    </Routes>
  );
}

export default App;
