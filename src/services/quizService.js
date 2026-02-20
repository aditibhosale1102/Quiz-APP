import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const addQuiz = async (quiz) => {
  await addDoc(collection(db, "quizzes"), quiz);
};

export const getQuizzes = async () => {
  const snapshot = await getDocs(collection(db, "quizzes"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};