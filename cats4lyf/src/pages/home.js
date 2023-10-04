import homeCat from "../images/cat-tail.gif";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="HomePage">
      <img src={homeCat} alt="Cat wagging tail" />
      <h1>Welcome to Felines For Life</h1>
      <p>
        Browse our available feline friends and find your purrrfect companion
      </p>
      <h3>Don't miss out...It's meow or never!</h3>
      <Link className="catLink" to="/cats">
        Browse available cats
      </Link>
    </div>
  );
};

export default Home;
