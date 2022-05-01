
const Book = ({
  title,
  authors,
  image,
  updateCurrentlyReading,
  updateWantToRead,
  updateRead,
  deleteBook,
  currentShelf,
  updateCurrentShelf,
}) => {

  const selectShelf = (e) => {
    if (e.target.value === "currentlyReading") {
      updateCurrentShelf(e.target.value);
      updateCurrentlyReading();
    }
    if (e.target.value === "wantToRead") {
      updateCurrentShelf(e.target.value);
      updateWantToRead();
    }
    if (e.target.value === "read") {
      updateCurrentShelf(e.target.value);
      updateRead();
    }
    if (e.target.value === "none") {
      updateCurrentShelf(e.target.value);
      deleteBook();
    }
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
              {currentShelf === "none" ? (
                <option value="none" selected>
                  None
                </option>
              ) : (
                <option value="none">None</option>
              )}
              {currentShelf === "currentlyReading" ? (
                <option value="currentlyReading" selected>
                  Currently Reading &#x2713;
                </option>
              ) : (
                <option value="currentlyReading">Currently Reading</option>
              )}
              {currentShelf === "wantToRead" ? (
                <option value="wantToRead" selected>
                  Want to Read &#x2713;
                </option>
              ) : (
                <option value="wantToRead">Want to Read</option>
              )}
              {currentShelf === "read" ? (
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
