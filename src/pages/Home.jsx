import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">Let's Quiz</h1>

      <h2 className="subtitle">
        Test your skills and become a master.
      </h2>

      <p className="description">
        We organize quizzes on various topics.
      </p>

      <p className="description">
        Sign up if you haven't already and get access to quizzes on the topic
        of your interest.
      </p>

      <h3 className="start">Start Your Journey Here:</h3>

      <Link to="/register">
        <button className="signup-btn">Sign Up</button>
      </Link>
    </div>
  );
};

export default Home;