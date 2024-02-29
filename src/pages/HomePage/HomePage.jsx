import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <nav>
        <Link to="/memes">Memes List</Link>
        <Link to="/custom">Custom Memes</Link>
      </nav>
    </div>
  );
};

export default HomePage;
