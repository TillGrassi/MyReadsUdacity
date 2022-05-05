import Book from "./Book";

const Shelf = ({updateBooks, books, name, updateCurrentlyReading, updateWantToRead, updateRead, deleteBook, list, currentShelf, updateCurrentShelf}) => {
    
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {list ? list.map((book) => 
                <Book
                book={book}
                key={book.id}
                title={book.title} 
                authors={book.authors} 
                image={book.imageLinks.thumbnail}
                //currentShelf={currentShelf}
                books={books}
                updateBooks={() => updateBooks(book)}
                //updateCurrentShelf={() => updateCurrentShelf()}
                deleteBook={() => deleteBook(book)}
                updateCurrentlyReading={() => updateCurrentlyReading(book)}
                updateWantToRead={() => updateWantToRead(book)}
                updateRead={() => updateRead(book)}/>) : <p>No Books to show</p>}
                </ol>
            </div>
        </div>
    )
};

export default Shelf;