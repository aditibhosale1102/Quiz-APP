import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <Link to="/quiz">Start Quiz</Link>
    </div>
  );
};

export default StudentDashboard;