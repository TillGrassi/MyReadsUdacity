import Shelf from "../Components/Shelf.js";
import { Link } from "react-router-dom";

const Shelves = ({deleteBook, currentlyReading, updateCurrentlyReading, wantToRead, updateWantToRead, read, updateRead, currentShelf, updateCurrentShelf}) => {
    return(    
        <div className="app">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <Shelf 
                    name="Currently Reading"
                    currentShelf={currentShelf}
                    updateCurrentShelf={() => updateCurrentShelf("currentlyReading")}
                    deleteBook={(book) => deleteBook(book, "currentlyReading")}
                    updateCurrentlyReading={(value) => updateCurrentlyReading(value)}
                    updateWantToRead={(value) => updateWantToRead(value)}
                    updateRead={(value) => updateRead(value)}
                    list={currentlyReading} />
                <Shelf 
                    name="Want To Read"
                    currentShelf={currentShelf}
                    updateCurrentShelf={() => updateCurrentShelf("wantToRead")}
                    deleteBook={(book) => deleteBook(book, "wantToRead")}
                    updateCurrentlyReading={(value, index) => updateCurrentlyReading(value)}
                    updateWantToRead={(value) => updateWantToRead(value)}
                    updateRead={(value) => updateRead(value)}
                    list={wantToRead} /> 
                <Shelf 
                    name="Read"
                    currentShelf={currentShelf}
                    updateCurrentShelf={() => updateCurrentShelf("read")}
                    deleteBook={(book) => deleteBook(book, "read")}
                    updateCurrentlyReading={(value) => updateCurrentlyReading(value)}
                    updateWantToRead={(value) => updateWantToRead(value)}
                    updateRead={(value) => updateRead(value)}
                    list={read} /> 
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        </div>
    )
}

export default Shelves;