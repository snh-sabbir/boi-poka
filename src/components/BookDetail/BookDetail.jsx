import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();

  const data = useLoaderData();

  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);
  console.log(book);

  const {
    bookId: currentBookId,
    image,
    author,
    bookName,
    category,
    publisher,
    rating,
    review,
    totalPages,
    yearOfPublishing,
  } = book;

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-3xl font-bold">{bookName}</h1>
          <p>By: {author}</p>
          <p className="py-6">{review}</p> <br />
          <div className="flex justify-between">
            <p>Published By: {publisher}</p>
            <p>Category: {category}</p>
          </div>
          <p>Rating: {rating}</p>
          <br />
          <p>Total Pages: {totalPages}</p>
          <p>Year: {yearOfPublishing}</p>
          <br />
          <div className="flex gap-2">
            <button className="btn btn-outline btn-accent">Read</button>
            <button className="btn btn-accent">WishList</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
