import { useState, useEffect } from "react";
import { update } from "../BooksAPI";

const Book = ({
  book,
  title,
  authors,
  image,
  books,
  updateCurrentlyReading,
  updateWantToRead,
  updateRead,
  updateBooks,
  deleteBook,
  //currentShelf,
  //updateCurrentShelf,
}) => {

  const [currentShelf, setCurrentShelf] = useState("");
     
  useEffect(() => {
  }, [books])

  const updateCurrentShelf = (shelf) => {
    setCurrentShelf(shelf)
    console.log("updateCurrentShelf",currentShelf)
  }

  const selectShelf = (e) => {
    console.log(e.target.value) 
    const updateShelf = async function () {
      await update(book, e.target.value)
      console.log(book)
      
    }
    updateShelf()
    updateBooks(book)
    console.log(book)
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: "url(" + image + ")",
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={selectShelf}>
              <option value="placeholder" disabled>
                Move to...
              </option>
              {book.shelf === "none" ? (
                <option value="none" selected>
                  None
                </option>
              ) : (
                <option value="none">None</option>
              )}
              {book.shelf === "currentlyReading" ? (
                <option value="currentlyReading" selected>
                  Currently Reading &#x2713;
                </option>
              ) : (
                <option value="currentlyReading">Currently Reading</option>
              )}
              {book.shelf === "wantToRead" ? (
                <option value="wantToRead" selected>
                  Want to Read &#x2713;
                </option>
              ) : (
                <option value="wantToRead">Want to Read</option>
              )}
              {book.shelf === "read" ? (
                <option value="read" selected>
                  Read &#x2713;
                </option>
              ) : (
                <option value="read">Read</option>
              )}
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  );
};
export default Book;
