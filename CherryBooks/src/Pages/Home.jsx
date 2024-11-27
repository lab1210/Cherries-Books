import "./css/Home.css";

const Home = () => {
  return (
    <div>
      <div className="cherry cherry-top"></div>
      <div className="cherry cherry-btm"></div>
      <div className="Home-content">
        <div>
          <h2>Welcome to Cherries&Books,</h2>
          <h3>where stories are as sweet and sour as cherries.</h3>
          <h4>
            For writers seeking an audience and readers seeking inspiration –
            we’ve got you covered.
          </h4>
          <div>
            <button className="homebtn Read">Explore Stories</button>
            <button className="homebtn Share">Share your Story</button>
          </div>
        </div>
        <div className="right-img">
          <img src="image.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
