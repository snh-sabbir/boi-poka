import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, author, bookName, category, tags, rating, bookId } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-gray-800 p-4 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            className="h-[200px] rounded-xl w-[200px]"
            alt={bookName}
          />
        </figure>
        <div className="card-body">
          <div className="flex">
            {tags.map((tag, index) => (
              <button key={index} className="btn btn-xs">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <div className="divider"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="badge flex gap-2">
              <div>{rating}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
