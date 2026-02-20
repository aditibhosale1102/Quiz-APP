import { useState } from "react";
import { addQuiz } from "../services/quizService";

const TeacherDashboard = () => {
  const [question, setQuestion] = useState("");

  const createQuiz = async () => {
    await addQuiz({ question });
    alert("Quiz Added");
  };

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <input
        type="text"
        placeholder="Enter Question"
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={createQuiz}>Add Quiz</button>
    </div>
  );
};

export default TeacherDashboard;