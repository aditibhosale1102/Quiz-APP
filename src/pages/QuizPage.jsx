import { useEffect, useState } from "react";
import { getQuizzes } from "../services/quizService";

const QuizPage = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    loadQuiz();
  }, []);

  const loadQuiz = async () => {
    const data = await getQuizzes();
    setQuizzes(data);
  };

  return (
    <div>
      <h1>Quiz</h1>
      {quizzes.map((quiz) => (
        <div key={quiz.id}>
          <p>{quiz.question}</p>
        </div>
      ))}
    </div>
  );
};

export default QuizPage;