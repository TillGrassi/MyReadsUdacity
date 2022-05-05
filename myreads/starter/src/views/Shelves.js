import Shelf from "../Components/Shelf";
import { Link } from "react-router-dom";

const Shelves = ({updateBooks, books, deleteBook, currentlyReading, updateCurrentlyReading, wantToRead, updateWantToRead, read, updateRead, currentShelf, updateCurrentShelf}) => {
    return(    
        <div className="app">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <Shelf 
                    name="Currently Reading"
                    //currentShelf={currentShelf}
                    //updateCurrentShelf={updateCurrentShelf}
                    updateBooks={updateBooks}
                    books={books}
                    deleteBook={(book) => deleteBook(book, "currentlyReading")}
                    updateCurrentlyReading={updateCurrentlyReading}
                    updateWantToRead={updateWantToRead}
                    updateRead={updateRead}
                    list={currentlyReading} />
                <Shelf 
                    name="Want To Read"
                    //currentShelf={currentShelf}
                    //updateCurrentShelf={updateCurrentShelf}
                    updateBooks={updateBooks}
                    books={books}
                    deleteBook={(book) => deleteBook(book, "wantToRead")}
                    updateCurrentlyReading={updateCurrentlyReading}
                    updateWantToRead={updateWantToRead}
                    updateRead={updateRead}
                    list={wantToRead} /> 
                <Shelf 
                    name="Read"
                    //currentShelf={currentShelf}
                    //updateCurrentShelf={updateCurrentShelf}
                    updateBooks={updateBooks}
                    books={books}
                    deleteBook={(book) => deleteBook(book, "read")}
                    updateCurrentlyReading={updateCurrentlyReading}
                    updateWantToRead={updateWantToRead}
                    updateRead={updateRead}
                    list={read} /> 
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        </div>
    )
}

export default Shelves;