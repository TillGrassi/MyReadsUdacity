import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { search } from "../BooksAPI";
import Book from "../components/Book";

const Search = ({
  deleteBook,
  updateCurrentlyReading,
  updateWantToRead,
  updateRead,
  currentShelf,
  updateCurrentShelf,
}) => {
  //get data from api
  const [showSearch, setShowSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const updateSearchValue = (searchValue) => {
    setSearchValue(searchValue);
  };

  useEffect(() => {
    let mounted = true;

    if (searchValue !== "") {
      search(searchValue, 20)
        .then((items) => {
          if (mounted) {
            setShowSearch(items);
          }
        })
        .catch((error) => console.log(error));
    }
    if (searchValue === "") {
      setShowSearch([]);
    }

    return () => (mounted = false);
  }, [searchValue]);

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/' className='close-search'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title, author, or ISBN'
            value={searchValue}
            onChange={(event) => updateSearchValue(event.target.value)}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {showSearch.length > 0 ? (
            showSearch.map((book) => (
              <Book
                key={book.id}
                title={book.title}
                authors={book.authors}
                image={book.imageLinks.thumbnail}
                currentShelf={currentShelf}
                updateCurrentShelf={(shelf) => updateCurrentShelf(shelf)}
                deleteBook={() => deleteBook()}
                updateCurrentlyReading={() => updateCurrentlyReading(book)}
                updateWantToRead={() => updateWantToRead(book)}
                updateRead={() => updateRead(book)}
              />
            ))
          ) : (
            <p>No Books to show</p>
          )}
        </ol>
      </div>
    </div>
  );
};
export default Search;
