import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { search } from "../BooksAPI";
import Book from "../Components/Book";

const Search = ({ books, updateBooks }) => {
  const [showSearch, setShowSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const updateSearchValue = (searchValue) => {
    setSearchValue(searchValue);
  };

  useEffect(() => {
    const searchAPI = async () => {
      const response = await search(searchValue, 20);

      if (response.error) return setShowSearch([]);

      const booksWithShelves = response.map((searchedBook) => {
        const savedBook = books.find((book) => book.id === searchedBook.id);
        if (savedBook) {
          return {
            ...searchedBook,
            shelf: savedBook.shelf,
          };
        }
        return searchedBook;
      });
      setShowSearch(booksWithShelves);
    };

    if (searchValue !== "") {
      searchAPI();
    }

    if (searchValue === "") {
      setShowSearch([]);
    }
  }, [searchValue, books]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchValue}
            onChange={(event) => updateSearchValue(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {showSearch.length > 0 ? (
            showSearch.map((book) => (
              <Book
                book={book}
                key={book.id}
                title={book.title}
                authors={book.authors}
                image={book.imageLinks.thumbnail}
                updateBooks={updateBooks}
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
