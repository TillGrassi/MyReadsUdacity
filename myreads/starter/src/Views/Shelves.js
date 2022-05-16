import Shelf from "../Components/Shelf";
import { Link } from "react-router-dom";

const Shelves = ({
  updateBooks,
  books,
  currentlyReading,
  wantToRead,
  read,
}) => {
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Shelf
          name="Currently Reading"
          updateBooks={updateBooks}
          books={books}
          list={currentlyReading}
        />
        <Shelf
          name="Want To Read"
          updateBooks={updateBooks}
          books={books}
          list={wantToRead}
        />
        <Shelf
          name="Read"
          updateBooks={updateBooks}
          books={books}
          list={read}
        />
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default Shelves;
