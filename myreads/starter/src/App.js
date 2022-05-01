import "./App.css";
import { useState } from "react";
import { Route, Routes} from "react-router-dom";
import Shelves from "./Views/Shelves.js";
import Search from "./Views/Search.js";

function App() {

  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);
  const [currentShelf, setCurrentShelf] = useState("")

  function updateCurrentShelf(shelf) {
    setCurrentShelf(shelf)
    console.log("currentShelf", currentShelf)
  }

  function updateCurrentlyReading(value) {
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
  };

  return (
    <Routes>
      <Route exact path="/" element={
        <Shelves 
        currentShelf={currentShelf}
        updateCurrentShelf={(shelf) => updateCurrentShelf(shelf)}
        deleteBook={(book, shelf) => deleteBook(book, shelf)}
        updateCurrentlyReading={(value) => updateCurrentlyReading(value)}
        currentlyReading={currentlyReading}
        updateWantToRead={(value) => updateWantToRead(value)}
        wantToRead={wantToRead} 
        updateRead={(value) => updateRead(value)}
        read={read} />} />
      <Route path="/search" element={
        <Search         
        currentShelf={currentShelf}
        updateCurrentShelf={(shelf) => updateCurrentShelf(shelf)}
        deleteBook={(book, shelf) => deleteBook(book, shelf)}
        updateCurrentlyReading={(value) => updateCurrentlyReading(value)}
        updateWantToRead={(value) => updateWantToRead(value)}
        updateRead={(value) => updateRead(value)}/>} />
    </Routes>
  );
}

export default App;
