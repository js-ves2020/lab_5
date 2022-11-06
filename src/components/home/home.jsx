import "./home.css";
const Home = () => {
  return (
    <>
      <div className="header">
        <div>
            <div>
                <img src="https://t4.ftcdn.net/jpg/01/63/75/29/360_F_163752905_ssm9pYAyaSzit4qjxXVDiQePQRChCH8u.jpg" alt=""/>
            </div>
            <div className="Overlay"> </div>
            <div className="HeaderContent">
                <h5>Welcome</h5>
                <h4>New Horizon <br/> University </h4>
                <p>We Aim to create an Extra-ordinary University</p>
                <button className="btn">Discover More</button>
            </div>
        </div>
      </div>
    </>
  );
};
export default Home;
