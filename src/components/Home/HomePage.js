import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import videoHomePage from "../../assets/video-homepage.mp4";
import "./homePage.scss";

const HomePage = (props) => {
  // state cua redux
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)

  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source className="ddd" src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title">There's a better way to ask</div>
        <div className="description">
          You don't want to make a boring form. And your audience won't answer
          one. Create a typeform instead—and make everyone happy.
        </div>
        <div className="get-started">
          {isAuthenticated === false ? 
          <Button onClick={() => navigate('/login')} variant="dark">Get started - it's free</Button> 
          : 
          <Button onClick={() => navigate('users')} variant="dark">Doing Quiz Now</Button>}

        </div>
      </div>
    </div>
  );
};
export default HomePage;
