import img from '../img/image-1.jpg';

const HomePage = () => {
  return (
    <div className="container">
      <img src={img} alt="Card for twitter" />
      <h1>Welcome in the application for managing tweets!</h1>
    </div>
  );
};

export default HomePage;
