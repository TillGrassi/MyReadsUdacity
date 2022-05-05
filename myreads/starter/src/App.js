import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes} from "react-router-dom";
import { getAll, update } from "./BooksAPI";
import Shelves from "./Views/Shelves";
import Search from "./Views/Search";

function App() {
  
  const [books, setBooks] = useState([])
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
  }, [books]);

  function updateBooks(book) {
    console.log("updateBooks:",books)
    setBooks([...books, book])
  }
  /*function updateCurrentlyReading(value) {
    if(read.filter(value => value.key)){deleteBook(value, "read")}
    if(wantToRead.filter(value => value.key)){deleteBook(value, "wantToRead")}
    if(currentlyReading.filter(value => value.key)){deleteBook(value, "currentlyReading")}
    setCurrentlyReading([...currentlyReading, value])
  };
 
  function updateWantToRead(value) {
    if(read.filter(value => value.key)){deleteBook(value, "read")}
    if(wantToRead.filter(value => value.key)){deleteBook(value, "wantToRead")}
    if(currentlyReading.filter(value => value.key)){deleteBook(value, "currentlyReading")}
    setWantToRead([...wantToRead, value])
  };
 
  function updateRead(value) {
    if(read.filter(value => value.key)){deleteBook(value, "read")}
    if(wantToRead.filter(value => value.key)){deleteBook(value, "wantToRead")}
    if(currentlyReading.filter(value => value.key)){deleteBook(value, "currentlyReading")}
    setRead([...read, value])
  };

  
  function deleteBook(book, shelf) {
    if(shelf === "currentlyReading"){
      setCurrentlyReading(currentlyReading.filter(item => item.key !== book.key))
    }
    if(shelf === "wantToRead") {
      setWantToRead(wantToRead.filter(item => item.key !== book.key))
    }
    if(shelf === "read") {
      setRead(read.filter(item => item.key !== book.key))
    }
  };*/


  return (
    <Routes>
      <Route exact path="/" element={
        <Shelves 
        //deleteBook={deleteBook}
        //currentShelf={currentShelf}
        //updateCurrentShelf={updateCurrentShelf}
        updateBooks={updateBooks}
        books={books}
        //updateCurrentlyReading={updateCurrentlyReading}
        currentlyReading={currentlyReading}
        //updateWantToRead={updateWantToRead}
        wantToRead={wantToRead} 
        //updateRead={updateRead}
        read={read} />} />
      <Route path="/search" element={
        <Search         
        //deleteBook={deleteBook}
        //currentShelf={currentShelf}
        //updateCurrentShelf={updateCurrentShelf}
        updateBooks={updateBooks}
        books={books}
        //updateCurrentlyReading={updateCurrentlyReading}
        //updateWantToRead={updateWantToRead}
        //updateRead={updateRead}
        />} />
    </Routes>
  );
}

export default App;
