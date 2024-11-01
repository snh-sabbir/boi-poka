import bannerImg from '../../assets/books.jpg'
import books from '../Books/Books.jsx'

const Banner = () => {
    const btnHandle = () => {
        console.log("CLDLKFEI")
    }
  return (
    <div className="hero bg-base-200 min-h-screen rounded-2xl my-6 h-[400px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Knowledge is power!</h1>
          <button onClick={btnHandle} className="btn btn-primary">Start Reading</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
