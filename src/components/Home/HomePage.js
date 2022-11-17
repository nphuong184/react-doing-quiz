import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import videoHomePage from "../../assets/video-homepage.mp4";
import "./homePage.scss";

const HomePage = (props) => {
  // state cua redux
  const isAuthenticated = useSelector(state =>state.user.isAuthenticated)
  const account = useSelector(state =>state.user.account)
  console.log(account);
  console.log(isAuthenticated);

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
          <Button variant="dark">Get started - it's free</Button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
