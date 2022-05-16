import Book from "./Book";

const Shelf = ({ updateBooks, books, name, list = [] }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {list.length > 0 ? (
            list.map((book) => (
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

export default Shelf;
